function findValueOfPartition(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = nums[1] - nums[0];
  for (let i = 1; i < n; i++) {
    ans = Math.min(ans, nums[i] - nums[i - 1]);
  }
  return ans;
}

export { findValueOfPartition };
