function minOperations(nums: number[], k: number): number {
  return nums.reduce((memo, x) => memo + x, 0) % k;
}

export { minOperations };
