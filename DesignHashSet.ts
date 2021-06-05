class MyHashSet {
  private LOAD_FACTOR: number;
  private size: number;
  private nums: number[];

  constructor() {
    this.LOAD_FACTOR = 0.75;
    this.size = 0;
    this.nums = new Array(16);
  }

  add(key: number): void {
    let hashIdx = this.hash(key);

    const num = this.nums[hashIdx];
    if (num === undefined) {
      this.nums[hashIdx] = key;
      this.size++;
    } else if (num !== key) {
      while (this.nums[hashIdx] !== undefined) {
        this.rebalance();
        hashIdx = this.hash(key);
      }

      this.nums[hashIdx] = key;
      this.size++;
    }

    /*
      Once a LOAD_FACTOR percent of the nums array is filled up,
      we have to rebalance the array to make new space for future
      entries.
    */
    if (this.size / this.nums.length >= this.LOAD_FACTOR) {
      this.rebalance();
    }
  }

  remove(key: number): void {
    const hashIdx = this.hash(key);
    if (this.nums[hashIdx] === key) {
      this.nums[hashIdx] = undefined;
      this.size--;
    }
  }

  contains(key: number): boolean {
    return this.nums[this.hash(key)] === key;
  }

  private hash = (key: number): number => {
    return key % this.nums.length;
  };

  private rebalance = () => {
    const newLength = this.nums.length * 2;
    let newNums = new Array<number>(newLength);
    this.nums.forEach((num) => {
      if (num !== undefined) {
        newNums[num % newLength] = num;
      }
    });
    this.nums = newNums;
  };
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
