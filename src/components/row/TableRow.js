import React from 'react';

const TableRow = ({ row }) => (
  <tr>
    {row.map((item, index) => (
      <td key={index}>{item > 1 && item}</td>
    ))}
  </tr>
);

export default TableRow;
