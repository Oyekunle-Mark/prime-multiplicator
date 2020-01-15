import React, { useState } from 'react';

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
    <div>
      <input
        type="number"
        value={size}
        onChange={onUpdate}
        placeholder="Enter table size..."
      />

      {!isValid && <p>Table size must pe a positive integer.</p>}
    </div>
  );
};

export default Input;
