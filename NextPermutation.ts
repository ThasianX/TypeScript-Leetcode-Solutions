/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }

  // Starting from the end, find the index where the values stop increasing
  let inversionIndex = nums.length - 2;
  while (
    inversionIndex >= 0 &&
    nums[inversionIndex] >= nums[inversionIndex + 1]
  ) {
    inversionIndex--;
  }

  /*
    If inversionIndex is -1, this means that this is the final permutation of
    the given set of numbers. To reach the initial state of the permutation,
    we only need to reverse the array.

    Else, find the next greatest number and swap it with the inversion number.
  */
  if (inversionIndex >= 0) {
    let nextGreatestNumIndex = nums.length - 1;
    while (nums[nextGreatestNumIndex] <= nums[inversionIndex]) {
      nextGreatestNumIndex--;
    }

    swap(nums, inversionIndex, nextGreatestNumIndex);
  }

  reverse(nums, inversionIndex + 1, nums.length - 1);
}

const swap = <T>(arr: Array<T>, i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const reverse = <T>(arr: Array<T>, start: number, end: number) => {
  while (start < end) {
    const temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
};
