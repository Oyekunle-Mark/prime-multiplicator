import React, { useState } from 'react';

import Input from './components/input/Input';
import Table from './components/table/Table';

const App = () => {
  const [size, setSize] = useState(10);

  return (
    <div>
      <Input size={size} setSize={setSize} />
      <Table />
    </div>
  );
};

export default App;
