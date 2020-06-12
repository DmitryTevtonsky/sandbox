/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useLayoutEffect, useRef } from 'react';
import sdbscan from 'sdbscan';
import dbscan from 'dbscanjs';

import { generateClusterColors } from '../utils';
import { draw } from './utils';

import './index.css';

const distance = (a, b) => {
  const x = Math.pow(a[0] - b[0], 2);
  const y = Math.pow(a[1] - b[1], 2);
  return Math.sqrt(x + y);
};

const DbscanComponent = ({ data, ranges, extents, maxX, maxY }) => {
  const canvas = useRef();

  useLayoutEffect(() => {
    const context = canvas.current.getContext('2d');

    console.log('data', data);

    const epsilon = 150;
    const minPts = 10;

    // const { clusters, noise } = sdbscan(data, epsilon, minPts);
    // console.log('clusters', clusters);
    // console.log('noise', noise);
    // const colors = generateClusterColors(clusters.length);

    const labels = dbscan(data, distance, epsilon, minPts);

    const uniqLabels = Array.from(new Set(labels));
    console.log('uniqLabels', uniqLabels);

    const colors = generateClusterColors(uniqLabels.length);

    draw(context, data, labels, colors, extents, ranges);
  }, []);

  return (
    <div className="k-means-box">
      DBSCAN
      <canvas ref={canvas} id="canvas" width={maxX} height={maxY} />
    </div>
  );
};

export default DbscanComponent;
