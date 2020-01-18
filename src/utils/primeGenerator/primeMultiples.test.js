import { generatePrimeMultiples } from './primeMultiples';

test('Return the multiples of primes', () => {
  let multiples = generatePrimeMultiples(2);
  let result = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ];
  expect(multiples).toEqual(result);

  multiples = generatePrimeMultiples(1);
  result = [
    [1, 2],
    [2, 4],
  ];
  expect(multiples).toEqual(result);

  multiples = generatePrimeMultiples(3);
  result = [
    [1, 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25],
  ];
  expect(multiples).toEqual(result);

  multiples = generatePrimeMultiples(5);
  result = [
    [1, 2, 3, 5, 7, 11],
    [2, 4, 6, 10, 14, 22],
    [3, 6, 9, 15, 21, 33],
    [5, 10, 15, 25, 35, 55],
    [7, 14, 21, 35, 49, 77],
    [11, 22, 33, 55, 77, 121],
  ];
  expect(multiples).toEqual(result);
});

test('Should throw error when argument is less than 1', () => {
  expect(() => {
    generatePrimeMultiples(-23);
  }).toThrow('You need to supply a positive number to generate multiples.');

  expect(() => {
    generatePrimeMultiples(0);
  }).toThrow('You need to supply a positive number to generate multiples.');
});
