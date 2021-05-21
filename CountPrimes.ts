function countPrimes(n: number): number {
  if (n < 2) {
    return 0;
  }

  let nonPrimeMemo = new Array<boolean>(n);
  let primeCounter = 0;

  for (let i = 2; i < n; i++) {
    if (nonPrimeMemo[i] !== undefined) {
      // Skip adding to total prime counter if non-prime
      continue;
    }

    primeCounter++;
    // Mark multiples of i as non-prime
    for (let j = 2; i * j < n; j++) {
      nonPrimeMemo[i * j] = true;
    }
  }

  return primeCounter;
}
