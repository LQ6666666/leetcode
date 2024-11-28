function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;

  // 建图
  const g: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        g[i].add(j);
        g[j].add(i);
      }
    }
  }

  const vis = new Array<number>(n).fill(0);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (vis[i] === 0) {
      ans++;
      dfs(i);
    }
  }

  function dfs(x: number) {
    if (vis[x] === 1) return;
    vis[x] = 1;

    for (const next of Array.from(g[x])) {
      dfs(next);
    }
  }

  return ans;
}

export { findCircleNum };
