function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
  let ans = Math.min(...baseCosts);
  for (const cost of baseCosts) {
    dfs(0, cost);
  }
  return ans;

  function dfs(index: number, cost: number): void {
    // 当前方案成本价已经大于等于我们已有最优方案的差值，后续选择只会使得成本更大，与 target 的差值更大
    if (Math.abs(ans - target) < cost - target) {
      return;
    }
    // 如果当前方案成本与已有方案同样接近 target，那么选择其中更小的成本值
    else if (Math.abs(ans - target) === Math.abs(cost - target)) {
      ans = Math.min(cost, ans);
    }
    // 如果当前方案成本更接近 target，那么更新最优方案为当前方案
    else if (Math.abs(ans - target) > Math.abs(cost - target)) {
      ans = cost;
    }

    // 如果所有元素已选择完毕，结束
    if (index === toppingCosts.length) {
      return;
    }

    // 对于当前元素（基料），三种选择
    dfs(index + 1, cost + toppingCosts[index] * 2);
    dfs(index + 1, cost + toppingCosts[index]);
    dfs(index + 1, cost);
  }
}

export {};
