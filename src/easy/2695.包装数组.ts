class ArrayWrapper {
  private sum: number;
  private str: string;

  constructor(nums: number[]) {
    this.sum = nums.reduce((acc, cur) => acc + cur, 0);
    this.str = `[${nums.toString()}]`;
  }

  valueOf() {
    return this.sum;
  }

  toString() {
    return this.str;
  }
}

export {};
