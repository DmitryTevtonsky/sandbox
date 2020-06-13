/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState } from 'react';
import KMeans from 'k-meansjs';
import { Button, Input, Checkbox, Alert } from 'antd';

import './index.css';
import { draw, calculateLength } from './kmeans';
import { generateClusterColors } from '../utils';

const KMeansComponent = ({
  data,
  maxX,
  maxY,
  isKmeansWorking,
  setIsKmeansWorking
}) => {
  const canvas = useRef();
  const [centersCount, setCentersCount] = useState(5);
  const [clustersCount, setClustersCount] = useState(5);
  const [isShowLengths, setIsShowLengths] = useState(false);
  const [mainLengths, setMainLengths] = useState([]);
  const [clusterColors, setClusterColors] = useState([]);

  const kmeansRun = context => {
    setIsKmeansWorking(true);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const generateColors = generateClusterColors(clustersCount);
    setClusterColors(generateColors);
    const kmeans = KMeans({
      data,
      k: centersCount
    });

    const fullLengths = Array.from({ length: centersCount }, () => []);

    kmeans.on('iteration', self =>
      draw(
        fullLengths,
        context,
        generateColors,
        self.data,
        self.means,
        self.assignments,
        self.extents,
        self.ranges
      )
    );

    kmeans.on('end', self => {
      setIsKmeansWorking(false);
      console.log(`Построение заняло кол-во итераций: ${self.iterations}`);
      const calculatedLengths = calculateLength(
        isShowLengths,
        fullLengths,
        context,
        generateColors,
        self.data,
        self.means,
        self.assignments,
        self.extents,
        self.ranges
      );
      setMainLengths(calculatedLengths);
      console.log(`lengths: ${calculatedLengths}`);
      console.log(`colors: ${generateColors}`);
    });

    kmeans.run({
      delay: 0
    });
  };

  useLayoutEffect(() => {
    const context = canvas.current.getContext('2d');

    kmeansRun(context);
  }, [data]);

  const handleOnChangeCentersCount = e => setCentersCount(e.target.value);

  const handleOnChangeClustersCount = e => setClustersCount(e.target.value);

  const handleRun = () => {
    kmeansRun(canvas.current.getContext('2d'));
  };

  const onChengeIsShowLengths = e => setIsShowLengths(e.target.checked);

  const description = clusterColors.map((cluster, index) => (
    <div
      className="clusterInfoBlock"
      key={cluster}
      style={{ border: `1px solid ${clusterColors[index]}` }}
    >
      <div className="clusterTitle">
        <div>Кластер</div>
        <div>{index}</div>
      </div>
      <div className="clusterInfo">
        <div
          className="clusterMark"
          style={{ background: `${clusterColors[index]}` }}
        />
        <div className="clusterLength">{mainLengths[index]}</div>
      </div>
    </div>
  ));

  return (
    <div className="k-means-box">
      K-means
      <canvas ref={canvas} id="canvas" width={maxX} height={maxY} />
      <div className="controls">
        <Input
          placeholder="Количество центров (5)"
          onChange={handleOnChangeCentersCount}
          allowClear
        />
        <Input
          placeholder="Количество кластеров (5)"
          onChange={handleOnChangeClustersCount}
          allowClear
        />
        {!isKmeansWorking && (
          <Alert
            message={`Полученные данные для ${clustersCount} кластеров с расчитанными средними растояниями до точек кластера: `}
            description={description}
            type="info"
          />
        )}

        <div className="buttons">
          <Checkbox onChange={onChengeIsShowLengths}>
            Показывать расстояния до цетройдов
          </Checkbox>
          <Button loading={isKmeansWorking} onClick={handleRun} type="primary">
            Перезапуск
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KMeansComponent;
