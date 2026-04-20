function firstStableIndex(nums: number[], k: number): number {
  const n = nums.length;

  const max = new Array<number>(n);
  max[0] = nums[0];
  for (let i = 1; i < n; i++) {
    max[i] = Math.max(max[i - 1], nums[i]);
  }

  const min = new Array<number>(n);
  min[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    min[i] = Math.min(min[i + 1], nums[i]);
  }

  for (let i = 0; i < n; i++) {
    if (max[i] - min[i] <= k) {
      return i;
    }
  }

  return -1;
}

export {};
