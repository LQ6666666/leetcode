function maxAdjacentDistance(nums: number[]): number {
  let ans = Number.MIN_SAFE_INTEGER;
  nums.push(nums[0]);
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    ans = Math.max(Math.abs(nums[i - 1] - nums[i]), ans);
  }
  return ans;
}

export { maxAdjacentDistance };
