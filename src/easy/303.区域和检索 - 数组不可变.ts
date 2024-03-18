class NumArray$ {
  private prefixNum: number[];

  constructor(nums: number[]) {
    const n = nums.length;
    const prefixNum = (this.prefixNum = new Array<number>(n + 1));
    prefixNum[0] = 0;
    for (let i = 0; i < n; i++) {
      prefixNum[i + 1] = nums[i] + prefixNum[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixNum[right + 1] - this.prefixNum[left];
  }
}

class NumArray {
  private prefix: number[];
  constructor(nums: number[]) {
    const prefix: number[] = new Array(nums.length + 1).fill(0);

    const n = nums.length;
    for (let i = 0; i <= n; i++) {
      prefix[i + 1] = nums[i] + prefix[i];
    }

    this.prefix = prefix;
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

export { NumArray };
