function maximumRows(matrix: number[][], numSelect: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const rows = new Array<number>(m).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        rows[i] |= 1 << j;
      }
    }
  }

  let ans = 0;
  for (let mask = 1; mask < 1 << n; ++mask) {
    if (bitCount(mask) !== numSelect) {
      continue;
    }

    let t = 0;
    for (const x of rows) {
      if ((x & mask) === x) {
        ++t;
      }
    }

    ans = Math.max(ans, t);
  }

  return ans;
}

function bitCount(x: number) {
  let count = 0;
  let i = 0;
  while (x > 0) {
    if ((x & 1) === 1) {
      count++;
    }
    i++;
    x = x >> 1;
  }
  return count;
}

export { maximumRows };
