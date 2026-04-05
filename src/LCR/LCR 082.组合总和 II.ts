function combinationSum2(candidates: number[], target: number): number[][] {
  const n = candidates.length;
  candidates.sort((a, b) => a - b);

  const ans: number[][] = [];
  const path: number[] = [];
  let sum = 0;
  dfs(0);
  return ans;

  function dfs(startIndex: number) {
    if (sum === target) {
      ans.push(path.concat());
      return;
    }

    if (startIndex === n || sum > target) {
      return;
    }

    for (let i = startIndex; i < n; i++) {
      const candidate = candidates[i];

      // 这样可以避免相同的情况筛选两次: 一次原生 for 循环，一次是递归
      if (i > startIndex && candidate === candidates[i - 1]) {
        continue;
      }

      path.push(candidate);
      sum += candidate;
      dfs(i + 1);
      sum -= candidate;
      path.pop();
    }
  }
}

export {};
