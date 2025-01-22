function maxCoins(piles: number[]): number {
  const n = piles.length;
  piles.sort((a, b) => a - b);

  let ans = 0;
  for (let i = n / 3; i < n; i += 2) {
    ans += piles[i];
  }

  return ans;
}

export { maxCoins };
