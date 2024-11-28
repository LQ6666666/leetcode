const positions = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1]
];

function checkValidGrid$(grid: number[][]): boolean {
  if (grid[0][0] !== 0) return false;

  const n = grid.length;
  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map.set(grid[i][j], [i, j]);
    }
  }

  let prev = map.get(0)!;
  for (let i = 1; i < n * n; i++) {
    const pos = map.get(i)!;
    let j = 0;
    for (; j < 8; j++) {
      const [x, y] = positions[j];
      if (prev[0] + x === pos[0] && prev[1] + y === pos[1]) {
        break;
      }
    }

    if (j === 8) return false;
    prev = pos;
  }

  return true;
}

// dfs
function checkValidGrid(grid: number[][]): boolean {
  if (grid[0][0] !== 0) return false;
  const n = grid.length;

  let count = 1;
  dfs(0, 0);
  return count === n * n;

  function dfs(i: number, j: number) {
    for (const [px, py] of positions) {
      const x = px + i;
      const y = py + j;
      if (x < 0 || x >= n || y < 0 || y >= n) {
        continue;
      }

      const value = grid[x][y];
      if (value === count) {
        count++;
        return dfs(x, y);
      }
    }
  }
}

export {};
