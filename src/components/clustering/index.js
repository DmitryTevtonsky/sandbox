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
  const [isKmeansWorking, setIsKmeansWorking] = useState(true);

  const maxX = 540;
  const maxY = 540;
  const offset = 0;

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
        disabled={isKmeansWorking}
        placeholder="Количество точек (1000)"
        onChange={handleOnChangePointsCount}
        allowClear
        style={{ width: 220 }}
        min={10}
        max={5000}
      />
      <Button icon="reload" onClick={recalcPoints} loading={isKmeansWorking} />
      <Select
        style={{ width: 150 }}
        placeholder="Выберите распределение"
        onChange={onChangeRandomization}
        value={randomization}
        disabled={isKmeansWorking}
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
            isKmeansWorking={isKmeansWorking}
            setIsKmeansWorking={setIsKmeansWorking}
          />
        </TabPane>
        <TabPane tab="DBSCAN" key="2">
          <DbscanComponent
            data={generatedData.data}
            ranges={generatedData.ranges}
            extents={generatedData.extents}
            maxX={maxX}
            maxY={maxY}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Clustering;
