function maximumMinutes(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  let ans = -1;
  let left = 0,
    /** mn 当作二分的上界 */
    right = m * n;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(grid, middle)) {
      ans = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans < m * n ? ans : 1e9;
}

/**
 *
 * @param grid 网格图
 * @param t 分钟
 * @returns 返回能否在初始位置停留 t 分钟，并安全到达安全屋
 */
function check(grid: number[][], t: number): boolean {
  const m = grid.length,
    n = grid[0].length;

  const onFire: boolean[][] = Array.from({ length: m }, (): boolean[] => new Array(n).fill(false));
  let f: [i: number, j: number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        // 标记着火的位置
        onFire[i][j] = true;
        f.push([i, j]);
      }
    }
  }

  // 如果火无法扩散就提前退出
  while (t-- && f.length) {
    // 火扩散
    spreadFire();
  }

  // 起点着火，寄
  if (onFire[0][0]) return false;

  // 人的 BFS
  const vis: boolean[][] = Array.from({ length: m }, (): boolean[] => new Array(n).fill(false));
  vis[0][0] = true;
  let queue: [i: number, j: number][] = [[0, 0]];

  while (queue.length) {
    const temp = queue;
    queue = [];

    for (const [i, j] of temp) {
      // 人走到这个位置后，火也扩散到了这个位置
      if (onFire[i][j]) continue;

      for (const [x, y] of getPositions(i, j)) {
        if (0 <= x && x < m && 0 <= y && y < n && !onFire[x][y] && !vis[x][y] && grid[x][y] === 0) {
          if (x === m - 1 && y === n - 1) return true;

          // 避免反复访问同一个位置
          vis[x][y] = true;
          queue.push([x, y]);
        }
      }
    }

    // 火扩散
    spreadFire();
  }

  // 人被火烧到，或者没有可以到达安全屋的路
  return false;

  // 火的 BFS
  function spreadFire() {
    const temp = f;
    f = [];
    for (const [i, j] of temp) {
      for (const [x, y] of getPositions(i, j)) {
        if (0 <= x && x < m && 0 <= y && y < n && !onFire[x][y] && grid[x][y] === 0) {
          // 标记着火的位置
          onFire[x][y] = true;
          f.push([x, y]);
        }
      }
    }
  }
}

/** 上下左右 */
function getPositions(i: number, j: number) {
  return [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1]
  ];
}

export { maximumMinutes };
