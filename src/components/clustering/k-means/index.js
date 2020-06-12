/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState } from 'react';
import KMeans from 'k-meansjs';
import { Button, Input, Checkbox } from 'antd';

import './index.css';
import { draw, calculateLength } from './kmeans';
import { generateRandomPoints, generateClusterColors } from '../utils';

const KMeansComponent = ({ data }) => {
  const canvas = useRef();
  const maxX = 540;
  const maxY = 540;
  const [pointsCount, setPointsCount] = useState(100);
  const [centersCount, setCentersCount] = useState(3);
  const [clustersCount, setClustersCount] = useState(3);
  const [isShowLengths, setIsShowLengths] = useState(false);

  const [isWorking, setIsWorking] = useState(false);

  const kmeansRun = context => {
    setIsWorking(true);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const clusterColors = generateClusterColors(clustersCount);

    const kmeans = KMeans({
      data,
      k: centersCount
    });

    const fullLengths = Array.from({ length: centersCount }, () => []);

    kmeans.on('iteration', self =>
      draw(
        fullLengths,
        context,
        clusterColors,
        self.data,
        self.means,
        self.assignments,
        self.extents,
        self.ranges
      )
    );

    kmeans.on('end', self => {
      setIsWorking(false);
      console.log(`Построение заняло кол-во итераций: ${self.iterations}`);
      return calculateLength(
        isShowLengths,
        fullLengths,
        context,
        clusterColors,
        self.data,
        self.means,
        self.assignments,
        self.extents,
        self.ranges
      );
    });

    kmeans.run({
      delay: 50
    });
  };

  useLayoutEffect(() => {
    const context = canvas.current.getContext('2d');

    kmeansRun(context);
  }, []);

  const handleOnChangePointsCount = e => setPointsCount(e.target.value);

  const handleOnChangeCentersCount = e => setCentersCount(e.target.value);

  const handleOnChangeClustersCount = e => setClustersCount(e.target.value);

  const handleRun = () => {
    kmeansRun(canvas.current.getContext('2d'));
  };

  const onChengeIsShowLengths = e => setIsShowLengths(e.target.checked);

  return (
    <div className="k-means-box">
      K-means
      <canvas ref={canvas} id="canvas" width={maxX} height={maxY} />
      <div className="controls">
        <Input
          placeholder="Количество точек (10)"
          onChange={handleOnChangePointsCount}
          allowClear
        />
        <Input
          placeholder="Количество центров (3)"
          onChange={handleOnChangeCentersCount}
          allowClear
        />
        <Input
          placeholder="Количество кластеров (3)"
          onChange={handleOnChangeClustersCount}
          allowClear
        />
        <div className="buttons">
          <Checkbox onChange={onChengeIsShowLengths}>
            Показывать расстояния до цетройдов
          </Checkbox>
          <Button loading={isWorking} onClick={handleRun} type="primary">
            Перезапуск
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KMeansComponent;
