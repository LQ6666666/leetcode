function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  // 记录行有没有
  const rows = new Array<number>(m).fill(0);
  // 记录列有没有
  const cols = new Array<number>(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rows[i]++;
        cols[j]++;
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        // 排除掉自己
        if (rows[i] > 1 || cols[j] > 1) {
          ans++;
        }
      }
    }
  }

  return ans;
}

export { countServers };
