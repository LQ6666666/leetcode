function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const memo = new Array<number>(n);
  return dfs(n - 1);

  function dfs(i: number): number {
    if (memo[i] !== undefined) return memo[i];

    let res = 0;
    let max = 0;
    for (let j = i; j > i - k && j >= 0; j--) {
      max = Math.max(arr[j], max);
      res = Math.max(res, dfs(j - 1) + (i - j + 1) * max);
    }
    return (memo[i] = res);
  }
}

export {};
