function maxSubArray(nums: number[]): number {
  if (nums.length < 2) {
    return nums[0];
  }

  let absoluteMax = nums[0];
  let localMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    /*
        If the local max is ever negative, we reset it
      back to 0.
        This is the equivalent of ignoring all previous
      elements to the current index.
        POV Steps:
          nums = [-2,1,-3,4,-1,2,1,-5,4]
          nums = [1,-3,4,-1,2,1,-5,4]
          nums = [4,-1,2,1,-5,4]
    */
    if (localMax < 0) {
      localMax = 0;
    }
    localMax += nums[i];
    absoluteMax = Math.max(absoluteMax, localMax);
  }

  return absoluteMax;
}
