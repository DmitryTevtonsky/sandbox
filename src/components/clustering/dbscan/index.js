/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState } from 'react';
import dbscan from 'dbscanjs';

import { Input, Button, Alert } from 'antd';
import { generateClusterColors } from '../utils';
import { draw } from './utils';

import './index.css';

const distance = (a, b) => {
  const x = (a[0] - b[0]) ** 2;
  const y = (a[1] - b[1]) ** 2;
  return Math.sqrt(x + y);
};

const DbscanComponent = ({ data, ranges, extents, maxX, maxY }) => {
  const canvas = useRef();
  const [epsilon, setEpsilon] = useState(30);
  const [minPts, setMinPts] = useState(5);
  const [clustersCount, setClustersCount] = useState(0);
  const [noisesCount, setNoisesCount] = useState(0);

  const dbScanRun = () => {
    const context = canvas.current.getContext('2d');

    const labels = dbscan(data, distance, epsilon, minPts);

    const uniqLabels = Array.from(new Set(labels));
    setNoisesCount(labels.filter(label => label === -1).length);
    setClustersCount(uniqLabels.length);
    console.log('uniqLabels', uniqLabels);

    const colors = generateClusterColors(uniqLabels.length);

    draw(context, data, labels, colors, extents, ranges);
  };

  useLayoutEffect(() => {
    console.log('Сгенерированные данные', data);
    dbScanRun();
  }, [data]);

  const handleOnChangeEpsilon = e => setEpsilon(e.target.value);

  const handleOnChangeMinPts = e => setMinPts(e.target.value);

  const handleRun = () => {
    dbScanRun();
  };

  return (
    <div className="dbscan-box">
      DBSCAN
      <canvas ref={canvas} id="canvas" width={maxX} height={maxY} />
      <div className="controls">
        <Input
          placeholder="minPts  (5)"
          onChange={handleOnChangeMinPts}
          allowClear
        />
        <Input
          placeholder="epsilon   (30)"
          onChange={handleOnChangeEpsilon}
          allowClear
        />
        {clustersCount && (
          <Alert
            message={`Полученное количество кластеров: ${clustersCount - 1}`}
            description={`Количество некластерированных точек (шумов): ${noisesCount}`}
            type="info"
          />
        )}
        <div className="buttons">
          <Button onClick={handleRun} type="primary">
            Перезапуск
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DbscanComponent;
