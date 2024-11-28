function minimumCost(nums: number[]): number {
  const a = nums[0];
  const [b, c] = nums.slice(1).sort((a, b) => a - b);
  return a + b + c;
}

export { minimumCost };
