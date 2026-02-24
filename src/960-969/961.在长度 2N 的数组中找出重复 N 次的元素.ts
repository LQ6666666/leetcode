function repeatedNTimes(nums: number[]): number {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const x = nums[i];
    if (x === nums[i - 1] || (i > 1 && x === nums[i - 2]) || (i > 2 && x === nums[i - 3])) {
      return x;
    }
  }

  return -1;
}

export {};
