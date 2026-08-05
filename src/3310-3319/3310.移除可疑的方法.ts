function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
  const grid = Array.from<unknown, number[]>({ length: n }, () => []);
  for (const [a, b] of invocations) {
    grid[a].push(b);
  }

  const isSuspicious = new Array<boolean>(n).fill(false);
  dfs(k);

  // 检查是否有【非可疑方法】->【可疑方法】的边
  for (const [a, b] of invocations) {
    if (!isSuspicious[a] && isSuspicious[b]) {
      const ans: number[] = [];
      for (let i = 0; i < n; i++) {
        ans.push(i);
      }
      return ans;
    }
  }

  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!isSuspicious[i]) {
      ans.push(i);
    }
  }

  return ans;

  function dfs(x: number) {
    isSuspicious[x] = true;
    for (const y of grid[x]) {
      if (!isSuspicious[y]) {
        dfs(y);
      }
    }
  }
}

export {};
