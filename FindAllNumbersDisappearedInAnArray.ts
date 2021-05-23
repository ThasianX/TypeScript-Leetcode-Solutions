function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = Math.abs(num) - 1;
    nums[index] = Math.abs(nums[index]) * -1;
  }

  return nums.reduce<number[]>((acc, num, idx) => {
    if (num < 0) {
      return acc;
    }
    // Opt for pushing instead of spreading(...acc) for performance
    acc.push(idx + 1);
    return acc;
  }, []);
}
