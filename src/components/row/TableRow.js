import React from 'react';

const TableRow = ({ row }) => (
  <tr>
    {row.map(item => (
      <td>{item}</td>
    ))}
  </tr>
);

export default TableRow;
