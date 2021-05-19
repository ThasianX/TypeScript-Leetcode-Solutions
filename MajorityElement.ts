function majorityElement(nums: number[]): number {
  // Current majority element candidate
  let candidate: number | null;
  // Count for the current majority element candidate
  let count = 0;

  for (let num of nums) {
    // Set a new candidate when old one loses majority
    if (count === 0) {
      candidate = num;
    }
    /*
      Increment or decrement count depending on whether
      the current number is equal to the candidate
    */
    if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
