function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const w: number[][] = Array.from({ length: n }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (const [from, to, weight] of edges) {
    w[from][to] = w[to][from] = weight;
  }

  const memo: number[][][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(n).fill(0))
  );

  function dfs(k: number, i: number, j: number): number {
    if (k < 0) return w[i][j];
    // 之前计算过
    if (memo[k][i][j]) return memo[k][i][j];
    // 缓存结果
    return (memo[k][i][j] = Math.min(dfs(k - 1, i, j), dfs(k - 1, i, k) + dfs(k - 1, k, j)));
  }

  let ans = 0;
  let minCnt = n;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (j !== i && dfs(n - 1, i, j) <= distanceThreshold) {
        cnt++;
      }
    }
    if (cnt <= minCnt) {
      // 相等时取最大的 i
      minCnt = cnt;
      ans = i;
    }
  }

  return ans;
}

export { findTheCity };
