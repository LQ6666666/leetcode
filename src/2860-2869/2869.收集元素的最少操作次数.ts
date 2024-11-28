function minOperations(nums: number[], k: number): number {
  const n = nums.length;
  const set = new Set<number>();

  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];
    if (num <= k) {
      set.add(num);
    }

    if (set.size === k) {
      return n - i;
    }
  }

  return -1;
}

export { minOperations };
