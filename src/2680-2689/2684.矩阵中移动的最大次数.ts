function maxMoves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;

  const memo = Array.from({ length: m }, () => new Array<number>(n).fill(-1));

  for (let i = 0; i < m; i++) {
    ans = Math.max(ans, dfs(i, 0, 0, -1));
  }

  return ans - 1;

  function dfs(row: number, col: number, count: number, value: number): number {
    if (row < 0 || row >= m || col < 0 || col >= n) return count;
    if (memo[row][col] !== -1) return memo[row][col];
    if (grid[row][col] <= value) return count;

    count++;

    let result = count;
    for (const [r, c] of [
      [-1, 1],
      [0, 1],
      [1, 1]
    ]) {
      result = Math.max(dfs(row + r, col + c, count, grid[row][col]), result);
    }

    memo[row][col] = result;
    return result;
  }
}

export {};
