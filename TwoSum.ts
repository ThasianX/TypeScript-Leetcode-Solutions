function twoSum(nums: number[], target: number): number[] {
  const indexesByNumbers = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const indexOfComplement = indexesByNumbers.get(target - nums[i]);

    if (indexOfComplement !== undefined) {
      return [indexOfComplement, i];
    }

    indexesByNumbers.set(nums[i], i);
  }

  throw new Error("Answer does not exist");
}
