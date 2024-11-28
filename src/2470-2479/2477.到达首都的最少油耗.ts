function minimumFuelCost(roads: number[][], seats: number): number {
  const g = Array.from<number, number[]>({ length: roads.length + 1 }, () => []);
  for (const [x, y] of roads) {
    // 记录每个点的邻居
    g[x].push(y);
    g[y].push(x);
  }

  let ans = 0;
  return dfs(0, -1), ans;

  function dfs(x: number, fa: number): number {
    let count = 1;
    // 递归子节点，不能递归父节点
    for (const y of g[x]) {
      if (y === fa) continue;
      // 统计子树大小
      count += dfs(y, x);
    }

    // x 不是根节点
    if (x !== 0) {
      ans += Math.ceil(count / seats);
    }

    return count;
  }
}

export { minimumFuelCost };
