/*
  The idea behind this solution is to sum up the
  number of trailing zeroes in each multiple of
  5 in n. This will give us the total number of
  trailing zeroes in n.
*/
function trailingZeroes(n: number): number {
  let zeroCount = 0;

  while (n > 0) {
    /*
      n is now the number of trailing zeroes in
      the previous n
    */
    n = Math.floor(n / 5);
    zeroCount += n;
  }

  return zeroCount;
}
