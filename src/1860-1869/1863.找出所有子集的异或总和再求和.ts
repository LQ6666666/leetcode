function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  let x = 0;
  dfs(0);
  return ans;

  function dfs(startIndex: number) {
    ans += x;

    if (startIndex === n) {
      return;
    }

    for (let i = startIndex; i < n; i++) {
      x ^= nums[i];
      dfs(i + 1);
      x ^= nums[i];
    }
  }
}

export { subsetXORSum };
