/**
 * Carries out a primality test.
 *
 * @param {number} num The number to be checked
 * @returns {boolean} true/false to confirm primality
 */
export const isPrime = num => {
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
 * @param {number} limit The upper limit of the prime numbers
 * @returns {number[]} The list of prime numbers
 */
export const primeList = limit => {
  const primes = [];
  let start = 2;

  while (primes.length < limit) {
    if (isPrime(start)) primes.push(start);

    start++;
  }

  return primes;
};
