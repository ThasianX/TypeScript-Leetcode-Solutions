function sortedSquares(A: number[]): number[] {
  let sortedSquares: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = A.length-1;

  while(leftIndex <= rightIndex) {
    const leftValue = Math.abs(A[leftIndex]);
    const rightValue = Math.abs(A[rightIndex]);

    if(leftValue < rightValue) {
      sortedSquares.push(rightValue*rightValue);
      rightIndex -= 1;
    } else {
      sortedSquares.push(leftValue*leftValue);
      leftIndex += 1;
    }
  }

  return sortedSquares.reverse();
};
