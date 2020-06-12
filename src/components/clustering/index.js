/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import KMeans from 'k-meansjs';
import { Button, Input, message, Checkbox } from 'antd';

import './index.css';
import {
  draw,
  generateClusterColors,
  generateSampleData,
  calculateLength
} from './kmeans';

const KMeansComponent = () => {
  const canvas = useRef();
  const [pointsCount, setPointsCount] = useState(10);
  const [centersCount, setCentersCount] = useState(3);
  const [clustersCount, setClustersCount] = useState(3);
  const [isShowLengths, setIsShowLengths] = useState(false);

  const [isWorking, setIsWorking] = useState(false);

  const kmeansRun = context => {
    setIsWorking(true);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const clusterColors = generateClusterColors(clustersCount);
    const data = generateSampleData(pointsCount);
    console.log('Входные данные:', data);

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
      message.success(
        `Построение заняло следующее количество итераций: ${self.iterations}`
      );
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
      k-means implementation
      <canvas ref={canvas} id="canvas" width="600" height="600" />
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
        <div>
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
