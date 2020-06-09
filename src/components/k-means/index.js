/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState } from 'react';
import KMeans from 'k-meansjs';
import { Button, Input, message } from 'antd';

import './index.css';
import {
  draw,
  random,
  generateClusterColors,
  generateSampleData
} from './kmeans';

const KMeansComponent = () => {
  const canvas = useRef();
  const [pointsCount, setPointsCount] = useState(100);
  const [centersCount, setCentersCount] = useState(3);
  const [isWorking, setIsWorking] = useState(false);

  const kPoints = 4; // random(3, 6);
  const clusterColors = generateClusterColors(kPoints);
  const data = generateSampleData(pointsCount);

  const kmeansRun = context => {
    setIsWorking(true);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.fillStyle = 'rgb(220,220,220)';
    // context.fillRect(0, 0, canvas.width, canvas.height);

    const kmeans = KMeans({
      data,
      k: centersCount
    });

    kmeans.on('iteration', self => {
      draw(
        context,
        clusterColors,
        self.data,
        self.means,
        self.assignments,
        self.extents,
        self.ranges
      );
    });

    kmeans.on('end', self => {
      setIsWorking(false);
      console.log(`Iterations took for completion: ${self.iterations}`);
      message.success(
        `Построение заняло следующее количество итераций: ${self.iterations}`
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

  const handleRun = () => {
    const context = canvas.current.getContext('2d');
    kmeansRun(context);
  };

  return (
    <div className="k-means-box">
      k-means implementation
      <canvas ref={canvas} id="canvas" width="600" height="600" />
      <div className="controls">
        <Input
          placeholder="Количество точек (100)"
          onChange={handleOnChangePointsCount}
          allowClear
        />
        <Input
          placeholder="Количество центров (3)"
          onChange={handleOnChangeCentersCount}
          allowClear
        />

        <Button disabled={isWorking} onClick={handleRun} type="default">
          Перезапуск
        </Button>
      </div>
    </div>
  );
};

export default KMeansComponent;
