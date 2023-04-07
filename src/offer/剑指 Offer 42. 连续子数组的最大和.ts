// dp 数组
function $maxSubArray(nums: number[]): number {
  const n = nums.length;
  const dp = new Array<number>(n);
  let ans = nums[0];
  dp[0] = ans;

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

function maxSubArray(nums: number[]): number {
  const n = nums.length;
  let dp = nums[0];
  let ans = dp;

  for (let i = 1; i < n; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    ans = Math.max(ans, dp);
  }

  return ans;
}

export {};
