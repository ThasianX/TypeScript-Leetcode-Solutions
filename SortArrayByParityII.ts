function sortArrayByParityII(A: number[]): number[] {
  let oddIndex = 1;

  for(let evenIndex = 0; evenIndex < A.length; evenIndex+=2) {
    if(A[evenIndex] % 2 != 0) {
      while(A[oddIndex] % 2 != 0) {
        oddIndex += 2;
      }
      
      const evenValueToSwap = A[oddIndex];
      A[oddIndex] = A[evenIndex];
      A[evenIndex] = evenValueToSwap;
    }
  }

  return A;
};
