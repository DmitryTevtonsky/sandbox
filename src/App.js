import React from 'react';
import RabbitAuth from './components/rabbit-auth';

import './App.css';
import TestBox from './components/test-box';
import KMeans from './components/k-means';

const App = () => {
  return (
    <div className="App">
      {/* <RabbitAuth /> */}
      {/* <TestBox /> */}
      {<KMeans />}
    </div>
  );
};

export default App;
