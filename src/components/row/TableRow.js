import React from 'react';

const TableRow = ({ row }) => (
  <tr>
    {row.map((item, index) => (
      <td key={index}>{item}</td>
    ))}
  </tr>
);

export default TableRow;
