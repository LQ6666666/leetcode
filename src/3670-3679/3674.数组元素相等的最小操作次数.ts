function minOperations(nums: number[]): number {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      return 1;
    }
  }
  return 0;
}

export {};
