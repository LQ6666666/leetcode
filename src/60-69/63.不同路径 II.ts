// dfs + 缓存
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const cache = new Map<string, number>();

  return dfs(0, 0);

  function dfs(i: number, j: number): number {
    if (i >= m || j >= n) return 0;
    if (obstacleGrid[i][j]) return 0;

    if (i === m - 1 && j === n - 1) return 1;

    const cacheKey = `${i},${j}`;
    const exist = cache.get(cacheKey);
    if (exist !== undefined) return exist;

    const result = dfs(i + 1, j) + dfs(i, j + 1);
    cache.set(cacheKey, result);
    return result;
  }
}

export { uniquePathsWithObstacles };
