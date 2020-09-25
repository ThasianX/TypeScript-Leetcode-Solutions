function fib(N: number): number {
  if(N === 0) { return 0; }
  if(N <= 2) { return 1; }

  let current = 0; // represents fib(N) 
  let prev1 = 1; // represents fib(N-1)
  let prev2 = 1; // represents fib(N-2)

  for(let i = 3; i <= N; i++) {
    current = prev1 + prev2;
    // prev1 and prev2 represent values of the next possible iteration
    prev2 = prev1;
    prev1 = current;
  }

  return current;
};
