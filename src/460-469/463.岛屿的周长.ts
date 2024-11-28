function islandPerimeter(grid: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
  ];

  const [col, row] = find(grid);
  if (col === -1 && row === -1) return 0;
  return dfs(col, row);

  function dfs(i: number, j: number): number {
    const value = grid[i]?.[j] ?? 0;
    if (value === 0) return 1;
    if (value === 2) return 0;

    let ans = 0;
    grid[i][j] = 2;
    for (const [a, b] of directions) {
      ans += dfs(i + a, j + b);
    }
    return ans;
  }
}

function find(grid: number[][]) {
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) return [i, j];
    }
  }
  return [-1, -1];
}

export { islandPerimeter };
