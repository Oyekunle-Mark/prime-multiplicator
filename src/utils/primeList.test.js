import { isPrime, primeList } from './primeList';

test('Correctly checks for primality', () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).not.toBeTruthy();
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(49)).not.toBeTruthy();
  expect(isPrime(7919)).toBeTruthy();
});
