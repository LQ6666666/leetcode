function mincostTickets(days: number[], costs: number[]): number {
  const lastDay = days[days.length - 1];
  const daySet = new Set(days);
  const memo = new Array<number>(lastDay + 1);

  return dfs(lastDay);

  function dfs(i: number): number {
    if (i <= 0) return 0;

    if (memo[i] !== undefined) return memo[i];

    let result: number;

    if (daySet.has(i)) {
      result = Math.min(dfs(i - 1) + costs[0], dfs(i - 7) + costs[1], dfs(i - 30) + costs[2]);
    } else {
      result = dfs(i - 1);
    }

    return (memo[i] = result);
  }
}

export { mincostTickets };
