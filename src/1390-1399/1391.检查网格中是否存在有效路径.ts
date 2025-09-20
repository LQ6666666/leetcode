type Key = `${number} + ${"top" | "bottom" | "left" | "right"}`;

const map: Record<Key, number[]> = {
  "1 + top": [],
  "1 + bottom": [],
  "1 + left": [1, 4, 6],
  "1 + right": [1, 3, 5],
  "2 + top": [2, 3, 4],
  "2 + bottom": [2, 5, 6],
  "2 + left": [],
  "2 + right": [],
  "3 + top": [],
  "3 + bottom": [2, 5, 6],
  "3 + left": [1, 4, 6],
  "3 + right": [],
  "4 + top": [],
  "4 + bottom": [2, 5, 6],
  "4 + left": [],
  "4 + right": [1, 3, 5],
  "5 + top": [2, 3, 4],
  "5 + bottom": [],
  "5 + left": [1, 4, 6],
  "5 + right": [],
  "6 + top": [2, 3, 4],
  "6 + bottom": [],
  "6 + left": [],
  "6 + right": [1, 3, 5]
};

function hasValidPath(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  if (m === 1 && n === 1) return true;

  const value = grid[0][0];
  grid[0][0] = -1;
  return dfs(0, 1, `${value} + right`) || dfs(1, 0, `${value} + bottom`);

  function dfs(i: number, j: number, key: Key): boolean {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === -1) {
      return false;
    }

    const value = grid[i][j];
    if (!map[key].includes(value)) {
      return false;
    }

    grid[i][j] = -1;

    if (i === m - 1 && j === n - 1) {
      return true;
    }

    return (
      dfs(i - 1, j, `${value} + top`) ||
      dfs(i + 1, j, `${value} + bottom`) ||
      dfs(i, j - 1, `${value} + left`) ||
      dfs(i, j + 1, `${value} + right`)
    );
  }
}

export { hasValidPath };
