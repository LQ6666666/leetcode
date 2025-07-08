function combinationSum(candidates: number[], target: number): number[][] {
  const n = candidates.length;
  const ans: number[][] = [];
  const path: number[] = [];
  let sum = 0;

  dfs(0);

  return ans;

  function dfs(index: number) {
    if (sum === target) {
      ans.push(path.concat());
      return;
    }

    for (let i = index; i < n; i++) {
      const candidate = candidates[i];
      if (candidate + sum > target) continue;

      path.push(candidate);
      sum += candidate;

      dfs(i);

      path.pop();
      sum -= candidate;
    }
  }
}

export { combinationSum };
