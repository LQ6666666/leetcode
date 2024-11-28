function maxOperations(nums: number[]): number {
  const n = nums.length;

  return Math.max(
    helper(0, n - 1, nums[0] + nums[1]),
    helper(0, n - 1, nums[n - 1] + nums[n - 2]),
    helper(0, n - 1, nums[0] + nums[n - 1])
  );

  function helper(i: number, j: number, target: number): number {
    const memo = Array.from({ length: n }, () => new Array<number>(n).fill(-1));
    return dfs(i, j);

    function dfs(i: number, j: number): number {
      if (i >= j) return 0;
      if (memo[i][j] !== -1) return memo[i][j];

      let result = 0;
      if (nums[i] + nums[i + 1] === target) {
        result = Math.max(result, 1 + dfs(i + 2, j));
      }
      if (nums[j - 1] + nums[j] === target) {
        result = Math.max(result, 1 + dfs(i, j - 2));
      }
      if (nums[i] + nums[j] === target) {
        result = Math.max(result, 1 + dfs(i + 1, j - 1));
      }
      return (memo[i][j] = result);
    }
  }
}

export { maxOperations };
