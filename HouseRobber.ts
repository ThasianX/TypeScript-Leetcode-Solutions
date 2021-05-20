// MARK: Recursive (top-down)
/* 
  nums = [2,7,9,3,1]
  (1 + 9 OR 7 + 2) OR (3 + 7 OR 2)
  (1 + 9 + 2) OR (3 + 7)
  12 OR 10
  12
*/
function rob(nums: number[]): number {
  return _rob(nums, nums.length - 1);
}

const _rob = (nums: number[], i: number): number => {
  if (i < 0) {
    return 0;
  }
  return Math.max(_rob(nums, i - 2) + nums[i], _rob(nums, i - 1));
};

// MARK: Recursive + memo (top-down)
function rob(nums: number[]): number {
  let memo = new Array(nums.length);
  return _rob(nums, memo, nums.length - 1);
}

const _rob = (nums: number[], memo: number[], i: number): number => {
  if (i < 0) {
    return 0;
  }
  if (memo[i] >= 0) {
    return memo[i];
  }
  const result = Math.max(
    _rob(nums, memo, i - 2) + nums[i],
    _rob(nums, memo, i - 1)
  );
  memo[i] = result;
  return result;
};

// MARK: Iterative + memo (bottom-up)
/*
  nums = [2, 7, 9, 3, 1];
  memo = [0, 2]
  memo = [0, 2, 7, 11, 10, 12]
*/
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let memo = new Array(nums.length + 1);
  memo[0] = 0;
  memo[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }
  return memo[nums.length];
}

// MARK: Iterative + 2 variables (bottom-up)
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  // Represents the memoized value 2 behind the current index
  let prev2 = 0;
  // Represents the memoized value 1 behind the current index
  let prev1 = 0;
  for (let num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev1, prev2 + num);
    prev2 = temp;
  }
  return prev1;
}
