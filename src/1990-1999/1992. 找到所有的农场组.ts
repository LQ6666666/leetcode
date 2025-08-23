function findFarmland(land: number[][]): number[][] {
  const m = land.length;
  const n = land[0].length;
  const ans: number[][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 1) {
        const rect = [i, j, i, j];
        ans.push(rect);
        helper(i, j, rect);
      }
    }
  }

  return ans;

  function helper(i: number, j: number, rect: number[]): void {
    const startI = i;
    const startJ = j;
    while (i + 1 < m && land[i + 1][j] === 1) {
      i++;
    }

    while (j + 1 < n && land[i][j + 1] === 1) {
      j++;
    }

    rect[2] = i;
    rect[3] = j;

    for (let i = startI; i <= rect[2]; i++) {
      for (let j = startJ; j <= rect[3]; j++) {
        land[i][j] = 0;
      }
    }
  }
}

export { findFarmland };
