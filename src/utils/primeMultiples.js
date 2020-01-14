import { primeList } from './primeList';

export const generatePrimeMultiples = limit => {
  if (limit < 2) {
    throw new Error('You need more than 1 number to generate multiples.');
  }

  const primes = primeList(limit);
  const multiples = [];

  for (let i = 0; i < primes.length; i++) {
    const row = [];

    for (let j = 0; j < primes.length; j++) {
      row.push(primes[i] * primes[j]);
    }

    multiples.push(row);
  }

  return multiples;
};
