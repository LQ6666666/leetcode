function distinctAverages(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const set = new Set<number>();
  const n = nums.length;
  const m = n >>> 1;

  for (let i = 0; i < m; i++) {
    const a = nums[i];
    const b = nums[n - i - 1];
    set.add((a + b) / 2);
  }

  return set.size;
}

export { distinctAverages };
