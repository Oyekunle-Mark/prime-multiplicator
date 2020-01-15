import React from 'react';

const TableRow = ({ row, index }) =>
  index === 0 ? (
    <thead>
      <tr>
        {row.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  ) : (
    <tr>
      {row.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );

export default TableRow;
