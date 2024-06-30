function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  let ans = 0;

  function dfs(i: number, sum: number): void {
    if (i === n) {
      if (sum === target) {
        ans++;
      }
    } else {
      dfs(i + 1, sum + nums[i]);
      dfs(i + 1, sum - nums[i]);
    }
  }

  dfs(0, 0);

  return ans;
}

export { findTargetSumWays };
