/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Tabs, Select, InputNumber, Button } from 'antd';
import KMeansComponent from './k-means';

import './index.css';
import DbscanComponent from './dbscan';
import { generateData, getOption } from './utils';

const { TabPane } = Tabs;
const { Option } = Select;

const Clustering = () => {
  const [randomization, setRandomization] = useState('circular');
  const [pointsCount, setPointsCount] = useState(1000);

  const maxX = 540;
  const maxY = 540;
  const offset = 20;

  const [generatedData, setGeneratedData] = useState(
    generateData(pointsCount, maxX, maxY, offset, getOption(randomization))
  );

  useEffect(() => {
    console.log('wtf');
    setGeneratedData(
      generateData(pointsCount, maxX, maxY, offset, getOption(randomization))
    );
  }, [randomization]);

  const onChangeRandomization = value => setRandomization(value);

  const handleOnChangePointsCount = value => setPointsCount(value);

  const recalcPoints = () =>
    setGeneratedData(
      generateData(pointsCount, maxX, maxY, offset, getOption(randomization))
    );

  const operations = (
    <div className="operations">
      <InputNumber
        placeholder="Количество точек (1000)"
        onChange={handleOnChangePointsCount}
        allowClear
        style={{ width: 220 }}
        min={10}
        max={10000}
      />
      <Button icon="reload" onClick={recalcPoints} />
      <Select
        style={{ width: 150 }}
        placeholder="Выберите распределение"
        onChange={onChangeRandomization}
        value={randomization}
      >
        <Option value="linear">Линейное</Option>
        <Option value="circular">Круговое</Option>
        <Option value="">Равномерное</Option>
      </Select>
    </div>
  );

  return (
    <div className="clustering-box">
      <Tabs defaultActiveKey="2" tabBarExtraContent={operations}>
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
