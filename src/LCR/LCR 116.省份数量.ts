function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  let ans = 0;
  const visits = new Array<0 | 1>(n).fill(0);

  const grid: number[][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        grid[i].push(j);
        grid[j].push(i);
      }
    }
  }

  // 统计有多少组
  for (let i = 0; i < n; i++) {
    if (visits[i] === 0) {
      ans++;
      dfs(i);
    }
  }

  return ans;

  function dfs(i: number): void {
    if (visits[i] === 1) return;
    visits[i] = 1;
    grid[i].forEach(dfs);
  }
}

export { findCircleNum };
