function countMaxOrSubsets(nums: number[]): number {
  const target = nums.reduce((memo, num) => memo | num, 0);
  let ans = 0;
  dfs(0, 0);
  return ans;

  function dfs(i: number, sum: number) {
    if (i === nums.length) {
      if (sum === target) {
        ans++;
      }
      return;
    }

    dfs(i + 1, sum | nums[i]);
    dfs(i + 1, sum);
  }
}

export { countMaxOrSubsets };
