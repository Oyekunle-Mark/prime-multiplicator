import React, { useState } from 'react';

import './Input.css';

const Input = ({ size, setSize }) => {
  const [isValid, setValid] = useState(true);

  const onUpdate = e => {
    if (/^[1-9]\d*$/.test(e.target.value)) {
      setSize(e.target.value);
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div className="input">
      <input
        type="number"
        value={size}
        onChange={onUpdate}
        placeholder="Enter table size..."
      />

      {!isValid && <span>Table size must be a positive integer.</span>}
    </div>
  );
};

export default Input;
