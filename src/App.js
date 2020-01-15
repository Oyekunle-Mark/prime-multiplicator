import React, { useState } from 'react';

import Input from './components/input/Input';
import Table from './components/table/Table';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  const [size, setSize] = useState(10);

  return (
    <div className="container">
      <Header />
      <Input size={size} setSize={setSize} />
      <Table size={size} />
    </div>
  );
};

export default App;
