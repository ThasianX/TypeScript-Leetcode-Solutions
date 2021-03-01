function diStringMatch(S: string): number[] {
  let increasingI = 0;
  let decreasingD = S.length;

  let permutation: number[] = [];
  for (let c of S) {
    if (c === "D") {
      permutation.push(decreasingD);
      decreasingD -= 1;
    } else {
      permutation.push(increasingI);
      increasingI += 1;
    }
  }
  permutation.push(increasingI);

  return permutation;
};
