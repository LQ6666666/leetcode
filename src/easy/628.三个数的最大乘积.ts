function maximumProduct(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => b - a);
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[n - 1] * nums[n - 2]);
}

export { maximumProduct };
