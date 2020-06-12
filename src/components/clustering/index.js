/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import KMeansComponent from './k-means';

import './index.css';
import DbscanComponent from './dbscan';
import { generateRandomPoints } from './utils';

const { TabPane } = Tabs;

const generateData = (pointsCount, rangeX, rangeY, offset) => {
  const data = generateRandomPoints(
    offset,
    rangeX - offset,
    offset,
    rangeY - offset,
    pointsCount,
    {
      name: 'linear',
      scope: 5,
      err: 150
    }
    // {
    //   name: 'circular',
    //   scope: 0,
    //   k: 3,
    //   err: 0,
    //   outlier: 40
    // }
  ).map(point => Object.values(point));

  const Xxes = [];
  const Yxes = [];
  data.forEach(([x, y]) => {
    Xxes.push(x);
    Yxes.push(y);
  });

  const extents = [
    {
      min: Math.min.apply(null, Xxes),
      max: Math.max.apply(null, Xxes)
    },
    {
      min: Math.min.apply(null, Yxes),
      max: Math.max.apply(null, Yxes)
    }
  ];

  const dataExtentRanges = () => {
    const ranges = [];

    for (let i = 0; i < extents.length; i++) {
      ranges[i] = extents[i].max - extents[i].min;
    }

    return ranges;
  };

  return { data, extents, ranges: dataExtentRanges() };
};

const Clustering = () => {
  const maxX = 540;
  const maxY = 540;
  const offset = 20;
  const [generatedData, setGeneratedData] = useState(
    generateData(100, maxX, maxY, offset)
  );

  useEffect(() => {
    // setGeneratedData(data);
  }, []);
  return (
    <div className="clustering-box">
      <Tabs defaultActiveKey="2">
        <TabPane tab="K-MEANS" key="1">
          <KMeansComponent
            data={generatedData.data}
            maxX={maxX}
            maxY={maxY}
            offset={offset}
          />
        </TabPane>
        <TabPane tab="DBSCAN" key="2">
          <DbscanComponent
            data={generatedData.data}
            ranges={generatedData.ranges}
            extents={generatedData.extents}
            maxX={maxX}
            maxY={maxY}
            offset={offset}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Clustering;
