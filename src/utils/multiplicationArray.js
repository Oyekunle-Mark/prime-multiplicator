import { primeList } from './primeList';

export const generatePrimeMultiples = limit => {
  if (limit < 2) {
    throw new Error('You need more than 1 number to generate multiples.');
  }

  const primes = primeList(limit);
};
