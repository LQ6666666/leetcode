function diagonalSort(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const ans: number[][] = Array.from({ length: m }, () => new Array(n));

  for (let i = m - 1; i >= 0; i--) {
    helper(0, i);
  }

  for (let i = 1; i < n; i++) {
    helper(i, 0);
  }

  return ans;

  function helper(i: number, j: number) {
    const nums: number[] = [];
    let x = i;
    let y = j;
    while (y < m && x < n) {
      nums.push(mat[y][x]);
      x++;
      y++;
    }
    nums.sort((a, b) => b - a);

    x = i;
    y = j;
    while (y < m && x < n) {
      ans[y][x] = nums.pop()!;
      x++;
      y++;
    }
  }
}

export { diagonalSort };
