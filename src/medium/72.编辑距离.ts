function minDistance(word1: string, word2: string): number {
  const n = word1.length;
  const m = word2.length;

  const memo = Array.from({ length: n }, () => new Array<number>(m).fill(-1));

  return dfs(n - 1, m - 1);

  function dfs(i: number, j: number): number {
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;

    if (memo[i][j] !== -1) return memo[i][j];

    let result: number;

    if (word1[i] === word2[j]) {
      result = dfs(i - 1, j - 1);
    } else {
      result = Math.min(Math.min(dfs(i - 1, j), dfs(i, j - 1)), dfs(i - 1, j - 1)) + 1;
    }

    return (memo[i][j] = result);
  }
}

export { minDistance };
