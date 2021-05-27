function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let absoluteLength = 1;
  let localLength = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      localLength++;
    } else {
      localLength = 1;
    }
    absoluteLength = Math.max(absoluteLength, localLength);
  }

  return absoluteLength;
}
