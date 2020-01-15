import React from 'react';

import TableRow from '../row/TableRow';
import { generatePrimeMultiples } from '../../utils/primeMultiples';

const Table = () => {
  const multTable = generatePrimeMultiples(5);

  return (
    <table>
      {multTable.map(row => (
        <TableRow row={row} />
      ))}
    </table>
  );
};

export default Table;
