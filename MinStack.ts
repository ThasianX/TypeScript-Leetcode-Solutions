class MinStack {
  _minNums: number[];
  _nums: number[];

  constructor() {
    this._minNums = [];
    this._nums = [];
  }

  push(val: number): void {
    this._nums.push(val);

    if (
      this._minNums.length === 0 ||
      val <= this._minNums[this._minNums.length - 1]
    ) {
      this._minNums.push(val);
    }
  }

  pop(): void {
    const top = this._nums.pop();
    if (this._minNums[this._minNums.length - 1] === top) {
      this._minNums.pop();
    }
  }

  top(): number {
    if (this._nums.length === 0) {
      return 0;
    }
    return this._nums[this._nums.length - 1];
  }

  getMin(): number {
    if (this._minNums.length === 0) {
      return 0;
    }
    return this._minNums[this._minNums.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
