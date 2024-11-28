function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i += 2) {
    sum += nums[i];
  }
  return sum;
}

export { arrayPairSum };
