function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const memo = Array.from({ length: m }, () => new Array<number>(n));

  return dfs(0, 0);

  function dfs(i: number, j: number): number {
    if (i >= m || j >= n) return 0;
    if (obstacleGrid[i][j] === 1) return 0;

    if (i === m - 1 && j === n - 1) return 1;

    const exist = memo[i][j];
    if (exist !== undefined) return exist;

    const result = dfs(i + 1, j) + dfs(i, j + 1);
    return (memo[i][j] = result);
  }
}

export { uniquePathsWithObstacles };
