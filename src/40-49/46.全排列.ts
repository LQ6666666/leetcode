function permute(nums: number[]): number[][] {
  const ans: number[][] = [];
  const n = nums.length;
  // 标记是否被用过了
  const map = new Map<number, boolean>();

  dfs([]);
  return ans;

  function dfs(path: number[]): void {
    if (path.length === n) {
      return void ans.push(path.slice());
    }

    for (const num of nums) {
      // 已经用过了
      if (map.get(num)) continue;

      map.set(num, true);
      path.push(num);

      dfs(path);

      // 撤销操作
      path.pop();
      map.set(num, false);
    }
  }
}

export {};
