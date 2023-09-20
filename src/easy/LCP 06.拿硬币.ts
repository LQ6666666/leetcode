function minCount(coins: number[]): number {
  let count = 0;

  for (const coin of coins) {
    count += Math.floor(coin / 2);
    count += coin % 2;
  }

  return count;
}

export { minCount };
