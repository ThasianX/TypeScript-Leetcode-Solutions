const MIN_32_BIT_INTEGER = -2147483648;
const MAX_32_BIT_INTEGER = 2147483647;

function divide(dividend: number, divisor: number): number {
  /*
    The quotient will be negative only if either the dividend or
    the divisor is negative. When they are both negative, the
    quotient is positive
  */
  let sign = dividend > 0 !== divisor > 0 ? -1 : 1;

  // Now we know the sign, make both values positive
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // Base case where the recursive loop stops
  if (dividend < divisor) {
    return 0;
  }

  // Edge case where the quotient is just the sign of the division
  if (dividend === divisor) {
    return sign;
  }

  let tempDivisor = divisor;
  let quotient = 1;

  /*
    Multiplying any number x * y is the same as (x+x+x+...) y times.
    This is the equivalent of adding the divisor over and over until
    we reach y. However, this is not as efficient as it can be. Instead,
    we can rely on left bit shifting the divisor, each shift doubling the
    value of the divisor until it becomes greater than the dividend.
    
    How do we determine the quotient from the number of left shifts?
    Since each a left shift will double the value of any number, we
    can determine the quotient through left shifting the number "1"
    the same amount of times to determine the proper value.

    We also check for the case where the left shifted divisor is less than
    0 which can occur when we hit 1073741824, which is one less than half 
    of the MAX_32_BIT_INTEGER value. As a result, this results in a value of
    MIN_32_BIT_INTEGER in the next shift.
  */
  for (
    let next = tempDivisor << 1;
    next > 0 && next <= dividend;
    next = tempDivisor << 1
  ) {
    tempDivisor = next;
    quotient <<= 1;
  }

  // Add in the remaining division
  quotient += divide(dividend - tempDivisor, divisor);
  // Add the proper sign
  quotient *= sign;

  // In case we have overflow in our quotient
  quotient = Math.max(MIN_32_BIT_INTEGER, quotient);
  quotient = Math.min(MAX_32_BIT_INTEGER, quotient);

  return quotient;
}
