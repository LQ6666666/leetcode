function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    const n = nums.length;
    const newNums: number[] = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
      newNums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = newNums;
  }
  return nums[0];
}

export {};
