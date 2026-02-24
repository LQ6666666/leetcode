function minOperations(nums: number[], target: number[]): number {
  const n = nums.length;
  const set = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (nums[i] !== target[i]) {
      set.add(nums[i]);
    }
  }
  return set.size;
}

export {};
