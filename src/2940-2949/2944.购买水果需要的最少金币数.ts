function minimumCoins(prices: number[]): number {
  const n = prices.length;
  const memo = new Array<number>(Math.floor((n + 1) / 2));
  return dfs(1);

  function dfs(i: number): number {
    if (i * 2>= n) {
      return prices[i - 1];
    }
    if (memo[i] !== undefined) {
      return memo[i];
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let j = i + 1; j <= i * 2 + 1; j++) {
      res = Math.min(res, dfs(j));
    }
    return (memo[i] = res + prices[i - 1]);
  }
}

export { minimumCoins };
