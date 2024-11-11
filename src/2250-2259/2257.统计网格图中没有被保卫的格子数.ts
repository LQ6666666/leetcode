function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  // 1 是被保卫
  // -1 是没被保卫
  // 0 是墙和警卫
  const visited = Array.from({ length: m }, () => new Array<-1 | 0 | 1>(n).fill(-1));
  for (const [row, col] of guards) {
    visited[row][col] = 0;
  }
  for (const [row, col] of walls) {
    visited[row][col] = 0;
  }

  for (const [row, col] of guards) {
    helper(row, col);
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === -1) {
        ans++;
      }
    }
  }

  return ans;

  function helper(row: number, col: number) {
    // 向左
    for (let i = col - 1; i >= 0; i--) {
      if (visited[row][i] === 0) {
        break;
      }
      visited[row][i] = 1;
    }
    // 向右
    for (let i = col + 1; i < n; i++) {
      if (visited[row][i] === 0) {
        break;
      }
      visited[row][i] = 1;
    }
    // 向上
    for (let i = row - 1; i >= 0; i--) {
      if (visited[i][col] === 0) {
        break;
      }
      visited[i][col] = 1;
    }
    // 向下
    for (let i = row + 1; i < m; i++) {
      if (visited[i][col] === 0) {
        break;
      }
      visited[i][col] = 1;
    }
  }
}

export { countUnguarded };
