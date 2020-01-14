import { primeList } from './primeList';

export const generatePrimeMultiples = limit => {
    const primes = primeList(limit);
    console.log(primes);
}
