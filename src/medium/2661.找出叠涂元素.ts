function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  // 记录每个元素所在的行和列
  const map = new Map<number, [row: number, col: number]>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.set(mat[i][j], [i, j]);
    }
  }

  const rows: number[] = new Array(m).fill(0);
  const cols: number[] = new Array(n).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const [row, col] = map.get(arr[i])!;
    if (++rows[row] === n || ++cols[col] === m) return i;
  }

  return -1;
}

export { firstCompleteIndex };
