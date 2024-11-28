function minIncrements(n: number, cost: number[]): number {
  let ans = 0;
  // 自底向上
  for (let i = n - 2; i > 0; i -= 2) {
    // 兄弟节点
    ans += Math.abs(cost[i] - cost[i + 1]);
    // 叶节点 i 和 i+1 的双亲节点(这个两个叶子节点的父节点)下标为 i/2（整数除法）
    cost[i >> 1] += Math.max(cost[i], cost[i + 1]);
  }
  return ans;
}

export { minIncrements };
