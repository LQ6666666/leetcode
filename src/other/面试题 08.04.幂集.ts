function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const path: number[] = [];
  dfs(0);
  return ans;

  function dfs(pos: number) {
    if (pos === n) {
      ans.push(path.concat());
      return;
    }

    dfs(pos + 1);
    path.push(nums[pos]);
    dfs(pos + 1);
    path.pop();
  }
}

export { subsets };
