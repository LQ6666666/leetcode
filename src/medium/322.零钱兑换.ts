function coinChange(coins: number[], amount: number): number {
  const memo = new Array<number>(amount + 1);
  return dfs(amount);

  function dfs(amount: number): number {
    if (amount < 0) return -1;
    if (amount === 0) return 0;

    if (memo[amount] !== undefined) return memo[amount];

    let min = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      const res = dfs(amount - coin);
      if (res >= 0 && res < min) {
        min = res + 1;
      }
    }

    min = min === Number.MAX_SAFE_INTEGER ? -1 : min;
    return (memo[amount] = min);
  }
}

export { coinChange };
