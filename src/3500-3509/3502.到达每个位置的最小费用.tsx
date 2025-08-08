function minCosts(cost: number[]): number[] {
  const n = cost.length;
  const ans = new Array<number>(n);
  let min = cost[0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, cost[i]);
    ans[i] = min;
  }
  return ans;
}

export { minCosts };
