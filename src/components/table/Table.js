import React from 'react';

import TableRow from '../row/TableRow';
import { generatePrimeMultiples } from '../../utils/primeMultiples';

const Table = ({size = 10}) => {
  const multTable = generatePrimeMultiples(size);

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
