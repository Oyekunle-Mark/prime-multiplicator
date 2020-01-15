import React, { useState } from 'react';

import Input from './components/input/Input';
import Table from './components/table/Table';
import './App.css';

const App = () => {
  const [size, setSize] = useState(10);

  return (
    <div className="container">
      <Input size={size} setSize={setSize} />
      <Table size={size} />
    </div>
  );
};

export default App;
