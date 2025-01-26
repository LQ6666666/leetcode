function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const n = candidates.length;

  const ans: number[][] = [];
  let sum = 0;
  const path: number[] = [];

  return dfs(0), ans;

  function dfs(startIndex: number) {
    if (sum === target) {
      ans.push(path.slice());
      return;
    } else if (sum > target) {
      return;
    }

    for (let i = startIndex; i < n; i++) {
      const value = candidates[i];
      // 剪枝
      if (value + sum > target) {
        break;
      }

      // 这样可以避免相同的情况筛选两次: 一次原生 for 循环，一次是递归
      if (i > startIndex && value === candidates[i - 1]) {
        continue;
      }

      path.push(value);
      sum += value;
      // +1 下一个坐标
      dfs(i + 1);

      path.pop();
      sum -= value;
    }
  }
}

export { combinationSum2 };
