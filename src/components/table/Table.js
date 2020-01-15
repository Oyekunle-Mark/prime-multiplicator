import React from 'react';

import TableRow from '../row/TableRow';
import { generatePrimeMultiples } from '../../utils/primeMultiples';

const Table = () => {
  const multTable = generatePrimeMultiples(5);

  return (
    <table>
      {multTable.map(
        (row, index) =>
          index === 0 && <TableRow key={index} row={row} isThead />,
      )}

      <tbody>
        {multTable.map(
          (row, index) => index > 0 && <TableRow key={index} row={row} />,
        )}
      </tbody>
    </table>
  );
};

export default Table;
