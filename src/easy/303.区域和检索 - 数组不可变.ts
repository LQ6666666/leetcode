class NumArray {
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

export { NumArray };
