function maxTaxiEarnings(n: number, rides: number[][]): number {
  const groups = Array.from<number, [number, number][]>({ length: n + 1 }, () => []);

  for (const [start, end, tip] of rides) {
    groups[end].push([start, end - start + tip]);
  }

  // -1 表示没有计算过
  const memo = new Array<number>(n + 1).fill(-1);

  function dfs(i: number): number {
    if (i === 1) return 0;

    // 之前计算过
    if (memo[i] !== -1) return memo[i];

    let res = dfs(i - 1);
    for (const [s, t] of groups[i]) {
      res = Math.max(res, dfs(s) + t);
    }
    // 记忆化
    return (memo[i] = res);
  }
  return dfs(n);
}
