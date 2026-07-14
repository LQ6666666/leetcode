function minimumAddedCoins(coins: number[], target: number): number {
  const n = coins.length;
  coins.sort((a, b) => a - b);
  let ans = 0;
  let s = 1;
  let i = 0;
  while (s <= target) {
    if (i < n && coins[i] <= s) {
      s += coins[i++];
    } else {
      s *= 2;
      ans++;
    }
  }

  return ans;
}

export {};
