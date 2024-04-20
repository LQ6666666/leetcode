function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  dfs(target, [], 0);
  return ans;

  function dfs(target: number, combine: number[], idx: number) {
    if (idx === candidates.length) return;

    if (target === 0) {
      ans.push(combine);
      return;
    }

    // 直接跳过
    dfs(target, combine, idx + 1);

    // 选择当前数
    const candidate = candidates[idx];
    if (target - candidate >= 0) {
      dfs(target - candidate, combine.concat(candidate), idx);
    }
  }
}

export { combinationSum };
