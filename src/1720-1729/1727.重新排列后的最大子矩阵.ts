function largestSubmatrix(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const heights = new Array<number>(n).fill(0);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        heights[j] = 0;
      } else {
        heights[j]++;
      }
    }

    const hs = heights.concat().sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
      ans = Math.max(ans, (n - i) * hs[i]);
    }
  }

  return ans;
}

export {};
