/**
题目求解的是最小翻转次数，使得两个岛屿相连，实际上等价于求解两个岛屿之间的最短距离。
因此，我们可以先通过 DFS 将其中一个岛屿的所有点找出来，放到一个队列 qq 中。然后通过 BFS 一层层向外扩展，
直至碰到另一个岛屿，此时将当前扩展的层数作为答案返回即可。
在 DFSDFS 和 BFSBFS 搜索的过程中，我们直接将已经访问过的点标记为 22，这样就不会重复访问。
时间复杂度 O(n^2)O(n2)，空间复杂度 O(n^2)O(n2)。其中 nn 为矩阵的行数或列数。
 */
function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  const positions: number[][] = [];

  function dfs(i: number, j: number) {
    const value = grid[i]?.[j];

    if (value === 1) {
      grid[i][j] = 2;
      positions.push([i, j]);

      for (const [dx, dy] of dirs) {
        dfs(i + dx, j + dy);
      }
    }
  }

  // 先找到一个岛屿
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        (i = n), (j = n);
        break;
      }
    }
  }

  let ans = 0;
  while (positions.length) {
    const len = positions.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = positions.shift()!;

      for (const [dx, dy] of dirs) {
        const i = x + dx,
          j = y + dy;

        const value = grid[i]?.[j];

        if (value === 0) {
          positions.push([i, j]);
          grid[i][j] = 2;
        } else if (value === 1) {
          return ans;
        }
      }
    }

    ans++;
  }

  return ans;
}

export { shortestBridge };
