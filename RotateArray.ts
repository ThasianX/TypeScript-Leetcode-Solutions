/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // Tracks number of times we've made modifications to nums
  let writeCounter = 0;
  /* 
    Tracks the starting index to begin in-place jump
    modifications. For odd length arrays, this value always
    stays 0. For even length arrays, this value starts at 0
    and increments to 1.
  */
  let startIdx = 0;

  while (writeCounter < nums.length) {
    // Index that is shifted by k. Used to track the rotated index
    let currentIdx = startIdx;
    // Stores the previous step's value
    let prevNum = nums[currentIdx];

    do {
      const rotatedIndex = (currentIdx + k) % nums.length;
      // Store this step's value to use for the next step
      const temp = nums[rotatedIndex];
      // Set the rotated index to the previous step's value
      nums[rotatedIndex] = prevNum;
      // Write value to use in the next iteration of this loop
      prevNum = temp;
      // Increment the current index by a step
      currentIdx = rotatedIndex;
      // Increment the number of times we've written to nums
      writeCounter++;
    } while (startIdx !== currentIdx);

    startIdx++;
  }
}
