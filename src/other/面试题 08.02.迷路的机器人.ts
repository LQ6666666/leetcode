function pathWithObstacles(obstacleGrid: number[][]): number[][] {
  const m = obstacleGrid.length;
  const ans: [number, number][] = [];
  if (m === 0) return ans;
  const n = obstacleGrid[0].length;

  const visits = Array.from({ length: m }, () => new Array<number>(n).fill(0));

  dfs(0, 0);
  return ans;

  function dfs(i: number, j: number): boolean {
    if (i >= m || j >= n || visits[i][j] === 1 || obstacleGrid[i][j] === 1) {
      return false;
    }

    ans.push([i, j]);
    visits[i][j] = 1;

    if (i === m - 1 && j === n - 1) {
      return true;
    }

    if (dfs(i + 1, j)) return true;

    if (dfs(i, j + 1)) return true;

    ans.pop();

    return false;
  }
}

export { pathWithObstacles };
