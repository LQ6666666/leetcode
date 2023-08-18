function maximizeSum(nums: number[], k: number): number {
  const m = Math.max(...nums);
  return ((2 * m + k - 1) * k) / 2;
}

export { maximizeSum };
