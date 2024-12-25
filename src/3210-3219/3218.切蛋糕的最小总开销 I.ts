function minimumCost(m: number, n: number, horizontalCut: number[], verticalCut: number[]): number {
  const memo: number[] = new Array(m * m * n * n).fill(-1);
  return dfs(0, 0, m - 1, n - 1);

  function dfs(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 === row2 && col1 === col2) {
      return 0;
    }
    const ind = index(row1, col1, row2, col2);
    if (memo[ind] !== -1) {
      return memo[ind];
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = row1; i < row2; i++) {
      res = Math.min(
        res,
        dfs(row1, col1, i, col2) + dfs(i + 1, col1, row2, col2) + horizontalCut[i]
      );
    }
    for (let i = col1; i < col2; i++) {
      res = Math.min(res, dfs(row1, col1, row2, i) + dfs(row1, i + 1, row2, col2) + verticalCut[i]);
    }
    return (memo[ind] = res);
  }

  function index(row1: number, col1: number, row2: number, col2: number): number {
    return (row1 * n + col1) * m * n + row2 * n + col2;
  }
}

export { minimumCost };
