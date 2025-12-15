function getDescentPeriods(prices: number[]): number {
  const n = prices.length;
  let count = 1;
  let prev = -1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const price = prices[i];
    if (prev - price === 1) {
      count++;
    } else {
      count = 1;
    }
    ans += count;
    prev = price;
  }
  return ans;
}

export {};
