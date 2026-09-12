function climbStairs(n: number, costs: number[]): number {
  const memo = new Array<number>(n + 1);
  return dfs(n);

  function dfs(i: number): number {
    if (i === 0) return 0;
    if (memo[i] !== undefined) return memo[i];
    let res = Number.MAX_SAFE_INTEGER;
    for (let j = Math.max(i - 3, 0); j < i; j++) {
      res = Math.min(res, dfs(j) + (i - j) * (i - j));
    }
    res += costs[i - 1];
    return (memo[i] = res);
  }
}

export {};
