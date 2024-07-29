function containsCycle(grid: string[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  // 访问过的标记, 每次 dfs 都要换一个标记
  let mark = 1;
  const visited = Array.from({ length: m }, () => new Array<number>(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0) {
        const flag = dfs(i, j, -1, -1, grid[i][j]);
        mark++;
        if (flag) {
          return true;
        }
      }
    }
  }

  return false;

  function dfs(x: number, y: number, formX: number, fromY: number, alpha: string): boolean {
    if (x < 0 || x >= m || y < 0 || y >= n) return false;
    if (visited[x][y] === mark) return true;
    if (grid[x][y] !== alpha) return false;

    visited[x][y] = mark;

    if ((x + 1 !== formX || y !== fromY) && dfs(x + 1, y, x, y, alpha)) return true;
    if ((x - 1 !== formX || y !== fromY) && dfs(x - 1, y, x, y, alpha)) return true;
    if ((x !== formX || y + 1 !== fromY) && dfs(x, y + 1, x, y, alpha)) return true;
    if ((x !== formX || y - 1 !== fromY) && dfs(x, y - 1, x, y, alpha)) return true;

    return false;
  }
}

export { containsCycle };
