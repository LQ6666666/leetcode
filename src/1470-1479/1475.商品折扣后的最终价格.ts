function finalPrices(prices: number[]): number[] {
  const n = prices.length;
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      const j = stack.pop()!;
      prices[j] = prices[j] - prices[i];
    }
    stack.push(i);
  }
  return prices;
}

export {};
