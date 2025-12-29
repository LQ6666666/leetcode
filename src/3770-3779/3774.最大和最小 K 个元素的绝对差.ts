function absDifference(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let max = 0;
  let min = 0;
  for (let i = 0; i < k; i++) {
    max += nums[i];
    min += nums[n - i - 1];
  }

  return Math.abs(max - min);
}

export {};
