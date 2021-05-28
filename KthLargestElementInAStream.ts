class KthLargest {
  private k: number;
  private nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums;

    for (let i = Math.floor((this.nums.length - 1) / 2); i >= 0; i--) {
      this.bubbleDown(i);
    }

    while (this.nums.length > this.k) {
      [this.nums[0], this.nums[this.nums.length - 1]] = [
        this.nums[this.nums.length - 1],
        this.nums[0],
      ];
      this.nums.pop();
      this.bubbleDown(0);
    }
  }

  add(val: number): number {
    if (this.nums.length < this.k) {
      const length = this.nums.push(val);
      this.bubbleUp(length - 1);
    } else {
      this.pushPop(val);
    }

    return this.nums[0];
  }

  private bubbleUp(idx: number) {
    const parentIdx = Math.floor(idx / 2);
    if (this.nums[parentIdx] > this.nums[idx]) {
      [this.nums[idx], this.nums[parentIdx]] = [
        this.nums[parentIdx],
        this.nums[idx],
      ];
      this.bubbleUp(parentIdx);
    }
  }

  private bubbleDown(idx: number) {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let minIdx = idx;

    if (leftIdx < this.nums.length && this.nums[leftIdx] < this.nums[minIdx]) {
      minIdx = leftIdx;
    }

    if (
      rightIdx < this.nums.length &&
      this.nums[rightIdx] < this.nums[minIdx]
    ) {
      minIdx = rightIdx;
    }

    if (minIdx !== idx) {
      [this.nums[idx], this.nums[minIdx]] = [this.nums[minIdx], this.nums[idx]];
      this.bubbleDown(minIdx);
    }
  }

  private pushPop(val: number) {
    if (val < this.nums[0]) {
      return val;
    }

    this.nums[0] = val;
    this.bubbleDown(0);
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
