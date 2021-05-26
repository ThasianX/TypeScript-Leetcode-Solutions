function checkPossibility(nums: number[]): boolean {
  let modifyCounter = 0;

  for (let i = 1; i < nums.length; i++) {
    // Checks for decreasing order elements
    if (nums[i - 1] > nums[i]) {
      modifyCounter++;
      /*
        We can only modify one element so once we modify more than
        one, we have to return false. We also return false when we
        encounter a case where the staggering of nums is such that
        there exists a case where two previous elements are greater
        in value than two next elements. It is impossible to make
        the array in non-decreasing order with only one modification
        in that case.
      */
      if (
        modifyCounter > 1 ||
        (i > 1 &&
          i < nums.length - 1 &&
          nums[i - 2] > nums[i] &&
          nums[i - 1] > nums[i + 1])
      ) {
        return false;
      }
    }
  }

  return true;
}
