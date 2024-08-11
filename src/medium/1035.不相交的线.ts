function maxUncrossedLines(s: number[], t: number[]): number {
  const memo = Array.from({ length: s.length }, () => new Array<number>(t.length));

  return dfs(s.length - 1, t.length - 1);

  function dfs(i: number, j: number): number {
    if (i < 0 || j < 0) return 0;

    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    let result: number;

    if (s[i] === t[j]) {
      result = dfs(i - 1, j - 1) + 1;
    } else {
      result = Math.max(dfs(i - 1, j), dfs(i, j - 1));
    }

    return (memo[i][j] = result);
  }
}

export { maxUncrossedLines };
