function hammingDistance(x: number, y: number): number {
  let xBinary = x.toString(2);
  let yBinary = y.toString(2);

  while(xBinary.length < yBinary.length) {
    xBinary = "0" + xBinary;
  }

  while(yBinary.length < xBinary.length) {
    yBinary = "0" + yBinary;
  }

  return xBinary.split("").reduce<number>((accumulator, currentValue, currentIndex) => {
    if(yBinary.charAt(currentIndex) !== currentValue) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
};

