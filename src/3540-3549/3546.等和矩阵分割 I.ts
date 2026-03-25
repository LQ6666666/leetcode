function canPartitionGrid(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  const sumM = new Array<number>(m).fill(0);
  const sumN = new Array<number>(n).fill(0);
  let total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sumM[i] += grid[i][j];
      sumN[j] += grid[i][j];
      total += grid[i][j];
    }
  }

  if (total % 2 !== 0) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += sumM[i];
    if (sum * 2 === total) {
      return true;
    } else if (sum * 2 > total) {
      break;
    }
  }

  sum = 0;
  for (let j = 0; j < n; j++) {
    sum += sumN[j];
    if (sum * 2 === total) {
      return true;
    } else if (sum * 2 > total) {
      break;
    }
  }

  return false;
}

export {};
