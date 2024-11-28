function combinationSum4(nums: number[], target: number): number {
  const memoMap = new Map<number, number>();
  return dfs(target);

  function dfs(x: number): number {
    if (x === 0) return 1;

    if (memoMap.has(x)) return memoMap.get(x)!;

    let res = 0;
    for (const num of nums) {
      if (x >= num) {
        res += dfs(x - num);
      }
    }

    memoMap.set(x, res);
    return res;
  }
}

export { combinationSum4 };
