import { primeList } from './primeList';

export const generatePrimeMultiples = limit => {
  if (limit < 2) {
    throw new Error('You need more than 1 number to generate multiples.');
  }

  const primes = primeList(limit);
  const multiples = [];

  // Generate and append the upper range of primes
  let top = [...primes];
  top.unshift(1);
  multiples.push(top);

  for (let i = 0; i < primes.length; i++) {
    const row = [];
    // add the current prime
    row.push(primes[i])

    for (let j = 0; j < primes.length; j++) {
      row.push(primes[i] * primes[j]);
    }

    multiples.push(row);
  }

  return multiples;
};
