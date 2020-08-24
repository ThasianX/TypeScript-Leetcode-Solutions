function numJewelsInStones(J: string, S: string): number {
  const jewels = new Set(J);
  let numOfJewels = 0;

  for (let stone of S) {
    if (jewels.has(stone)) {
      numOfJewels += 1;
    }
  }

  return numOfJewels;
}
