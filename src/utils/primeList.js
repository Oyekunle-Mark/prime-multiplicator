const isPrime = num => {
  let lower = 2;
  const upper = Math.sqrt(num);

  while (lower <= upper) {
    if (num % lower === 0) return false;
    lower++;
  }

  return true;
};
