function twoCitySchedCost(costs: number[][]): number {
  // 按照 price_A - price_B 从小到大排序
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let ans = 0;
  // 将前 N 个人飞往 A 市，其余人飞往 B 市，并计算出总费用
  const n = Math.floor(costs.length / 2);
  for (let i = 0; i < n; i++) {
    ans += costs[i][0] + costs[i + n][1];
  }
  return ans;
}

export {};
