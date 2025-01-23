function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid1.length;
  const n = grid1[0].length;

  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        if (dfs(i, j)) {
          ans++;
        }
      }
    }
  }

  return ans;

  function dfs(i: number, j: number): boolean {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) {
      return true;
    }

    if (grid1[i][j] === 0) {
      return false;
    }

    grid2[i][j] = 0;

    const top = dfs(i + 1, j);
    const bottom = dfs(i - 1, j);
    const right = dfs(i, j + 1);
    const left = dfs(i, j - 1);

    return top && bottom && right && left;
  }
}

export { countSubIslands };
