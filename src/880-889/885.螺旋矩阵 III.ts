function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  const ans: number[][] = Array.from({ length: rows * cols }, () => new Array<number>(2));
  let index = 0;
  ans[index++] = [rStart, cStart];

  if (rows * cols === 1) return ans;

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  for (let k = 1; k < 2 * (rows + cols); k += 2) {
    // 方向
    for (let i = 0; i < 4; i++) {
      // 在这个方向上的步数
      const dk = k + Math.floor(i / 2);
      for (let j = 0; j < dk; j++) {
        rStart += dr[i];
        cStart += dc[i];
        if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
          ans[index++] = [rStart, cStart];
          if (index === rows * cols) return ans;
        }
      }
    }
  }

  return ans;
}

export {};
