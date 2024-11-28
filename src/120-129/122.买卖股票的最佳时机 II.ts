function maxProfit(prices: number[]): number {
  const n = prices.length;
  let profit = 0;

  for (let i = 1; i < n; i++) {
    const temp = prices[i] - prices[i - 1];
    if (temp > 0) {
      profit += temp;
    }
  }

  return profit;
}

export { maxProfit };
