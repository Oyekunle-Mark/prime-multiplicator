import React from 'react';

const Input = ({ size, setSize }) => {
  const onUpdate = e => setSize(e.target.value);

  return (
    <input
      type="number"
      value={size}
      onChange={onUpdate}
      placeholder="Enter table size..."
    />
  );
};

export default Input;
