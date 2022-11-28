function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  function dfs(startIndex: number) {
    if (path.length === k) {
      ans.push(path.slice());
      return;
    }

    // 剪枝优化
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      // for (let i = startIndex; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(1);
  return ans;
}

export { combine };
