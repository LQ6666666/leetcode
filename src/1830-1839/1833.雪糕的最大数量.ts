function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  const n = costs.length;
  let total = 0;
  let ans = 0;
  while (ans < n && total + costs[ans] <= coins) {
    total += costs[ans++];
  }
  return ans;
}

export {};
