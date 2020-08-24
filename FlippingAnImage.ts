function flipAndInvertImage(A: number[][]): number[][] {
  return A.map((row) => row.reverse().map((bit) => bit ^ 1));
}
