import { isPrime, primeList } from './primeList';

test('Correctly checks for primality', () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).not.toBeTruthy();
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(49)).not.toBeTruthy();
  expect(isPrime(7919)).toBeTruthy();
});

test('Generates the right range of primes', () => {
    let result = primeList(10);
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];

    expect(result).toEqual(primes.slice(0, 10));

    result = primeList(20);
    expect(result).toEqual(primes);
});
