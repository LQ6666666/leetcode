function maxProfit(prices: number[]): number {
  let cost = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (const price of prices) {
    // 更新前 i 天的最低价格，即最低买入成本 cost
    cost = Math.min(price, cost);
    // 更新前 i 天的最高利润 profit ，即选择「前 i-1 天最高利润 profit 」和「第 i 天卖出的最高利润 price - cost 」中的最大值
    profit = Math.max(price - cost, profit);
  }

  return profit;
}

export { maxProfit };
