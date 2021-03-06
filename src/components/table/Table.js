import React from 'react';

import './Table.css';

import TableRow from '../row/TableRow';
import { primeGenerator } from '../../utils/primeGenerator';

const Table = ({ size = 10 }) => {
  const multTable = primeGenerator(size);

  return (
    <table>
      <thead>
        {multTable.map(
          (row, index) => index === 0 && <TableRow key={index} row={row} />,
        )}
      </thead>

      <tbody>
        {multTable.map(
          (row, index) => index > 0 && <TableRow key={index} row={row} />,
        )}
      </tbody>
    </table>
  );
};

export default Table;
