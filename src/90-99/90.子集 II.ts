function subsetsWithDup(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const path: number[] = [];

  function dfs(startIndex: number) {
    ans.push(path.slice());

    for (let i = startIndex; i < n; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  }

  nums.sort((a, b) => a - b);
  return dfs(0), ans;
}

export { subsetsWithDup };
