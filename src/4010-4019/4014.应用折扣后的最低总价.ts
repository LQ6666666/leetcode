function minPrice(prices: number[], discounts: number[]): number {
  const n = prices.length;
  const m = discounts.length;

  prices.sort((a, b) => b - a);
  discounts.sort((a, b) => b - a);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const price = prices[i];
    if (i < m) {
      ans += (price * (100 - discounts[i])) / 100;
    } else {
      ans += price;
    }
  }
  return ans;
}

export {};
