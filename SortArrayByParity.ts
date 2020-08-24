function sortArrayByParity(A: number[]): number[] {
  let evenIndex = 0;
  let oddIndex = A.length - 1;

  while (evenIndex < oddIndex) {
    if (A[evenIndex] % 2 == 0) {
      evenIndex += 1;
      continue;
    }

    if (A[oddIndex] % 2 != 0) {
      oddIndex -= 1;
      continue;
    }

    const evenValue = A[evenIndex];
    A[evenIndex] = A[oddIndex];
    A[oddIndex] = evenValue;
  }

  return A;
}
