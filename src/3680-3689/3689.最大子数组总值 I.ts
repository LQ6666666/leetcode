function maxTotalValue(nums: number[], k: number): number {
  const n = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  return (max - min) * k;
}

export {};
