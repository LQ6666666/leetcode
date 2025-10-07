function alternatingSum(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += (i % 2 === 0 ? 1 : -1) * nums[i];
  }
  return ans;
}

export { alternatingSum };
