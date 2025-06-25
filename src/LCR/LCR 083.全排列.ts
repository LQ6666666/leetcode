function permute(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const path: number[] = [];
  const set = new Set<number>();
  dfs();
  return ans;

  function dfs() {
    if (path.length === n) {
      ans.push(path.concat());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (set.has(nums[i])) {
        continue;
      }

      path.push(nums[i]);
      set.add(nums[i]);
      dfs();
      set.delete(path.pop()!);
    }
  }
}

export { permute };
