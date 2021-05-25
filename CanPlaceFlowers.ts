function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  let i = 0;
  let placedFlowers = 0;

  while (i < flowerbed.length) {
    if (isPlaceable(flowerbed, i)) {
      /* 
        Increment i if we place a flower since we know
        that we can't place in the subsequent index 
      */
      flowerbed[i++] = 1;
      placedFlowers++;
    }
    // Optimization to stop process when we place n floewrs
    if (placedFlowers === n) {
      return true;
    }
    i++;
  }

  return false;
}

// Placeable if the index before and after idx are 0 and idx is 0
const isPlaceable = (flowerbed: number[], idx: number): boolean => {
  return (
    flowerbed[idx] === 0 &&
    (idx === 0 || flowerbed[idx - 1] === 0) &&
    (idx === flowerbed.length - 1 || flowerbed[idx + 1] === 0)
  );
};
