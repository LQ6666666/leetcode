const DIRS: [x: number, y: number][] = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1]
];

function knightProbability(n: number, k: number, row: number, column: number): number {
  const memo = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n }, () => new Array<number>(n))
  );
  return dfs(k, row, column);

  function dfs(k: number, i: number, j: number): number {
    if (i < 0 || j < 0 || i >= n || j >= n) return 0;
    if (k === 0) return 1;
    if (memo[k][i][j] !== undefined) return memo[k][i][j];
    let res = 0;
    for (const [x, y] of DIRS) {
      res += dfs(k - 1, i + x, j + y);
    }
    return (memo[k][i][j] = res / DIRS.length);
  }
}

export {};
