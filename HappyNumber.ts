function isHappy(n: number): boolean {
  const seen = new Set<number>();
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
    n = sumOfSquaresOfDigits(n);
  }
  return true;
}

const sumOfSquaresOfDigits = (n: number): number => {
  let m = 0;
  while (n > 0) {
    m += Math.pow(n % 10, 2); // square last digit
    n = Math.floor(n / 10); // shift right
  }
  return m;
};
