/**
 * Carries out a primality test.
 *
 * @param {number} num The number to be checked
 * @returns {boolean} true/false to confirm primality
 */
const isPrime = num => {
  let lower = 2;
  const upper = Math.sqrt(num);

  while (lower <= upper) {
    if (num % lower === 0) return false;
    lower++;
  }

  return true;
};

/**
 * Generates a range of prime numbers
 *
 * @param {number} end The upper limit of the prime numbers
 * @returns {number[]} The list of prime numbers
 */
const primeList = end => {
  const primes = [];

  for (let i = 2; i <= end; i++) if (isPrime(i)) primes.push(i);

  return primes;
};

export default primeList;
