function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const m = matrix.length,
    n = matrix[0].length;

  const map = new Map<string, number>();
  for (let i = 0; i < m; i++) {
    const arr = new Array<string>(n).fill("0");
    for (let j = 0; j < n; j++) {
      // 如果 matrix[i][0] 为 1，则对该行元素进行翻转
      arr[j] = `0${matrix[i][j] ^ matrix[i][0]}`;
    }
    const key = arr.join("");
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  return Math.max(...map.values());
}

export {};
