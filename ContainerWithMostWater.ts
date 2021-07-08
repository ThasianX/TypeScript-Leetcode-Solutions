function maxArea(height: number[]): number {
  let absoluteMaxArea = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const smallerHeight = Math.min(height[i], height[j]);
    const width = j - i;
    const area = smallerHeight * width;
    absoluteMaxArea = Math.max(absoluteMaxArea, area);

    /* 
      Shift either i or j depending on whichever has
      a smaller height. We can safely ignore values not
      in the frame of i and j after shifting because
      the max area is based off of the min height.

      Ex:
        [1, 3, 2, 10]
        i -> 0, j -> 3
        In this case, we can safely increment i to 1 because
        we already know the max area if i remains at 0, which
        is 1*3=3. If we decrement j to 2 knowing this, the area 
        we get is 1*2=2. As such, tossing away smaller heights
        once an area is calculated with them is safe because
        the initial area is always its max.
    */
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return absoluteMaxArea;
}
