function numberOfSteps(num: number): number {
  let reducedNum = num;
  let numOfSteps = 0;

  while (reducedNum != 0) {
    numOfSteps++;
    reducedNum = reduce(reducedNum);
  }

  return numOfSteps;
}

function reduce(n: number): number {
  return n % 2 == 0 ? n / 2 : n - 1;
}
