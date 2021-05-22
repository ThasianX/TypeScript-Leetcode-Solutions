function getSum(a: number, b: number): number {
  /*
    Since we can't use addition, we use bit manipulation
    to add the two operands.
    The process is pretty straightforward.
    1)
      - Determine if the current sum has any carryouts
        - ie 0100 + 0100 has a carryout of 1
      - If it does, we determine a new non-carry sum as well
        as the carryout associated with that sum
      - We repeat this process until we've eliminated all
        carryouts
      - At return, we are guaranteed that all carryouts will
        have successfully been added to the non-carry sum
        through bit manipulation
  */
  let nonCarrySum = a ^ b;
  let carry = (a & b) << 1;

  while (carry !== 0) {
    let newNonCarrySum = nonCarrySum ^ carry;
    let newCarry = (nonCarrySum & carry) << 1;
    nonCarrySum = newNonCarrySum;
    carry = newCarry;
  }

  return nonCarrySum;
}
