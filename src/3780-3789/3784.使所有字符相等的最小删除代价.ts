function minCost(s: string, cost: number[]): number {
  const n = s.length;
  const total = cost.reduce((memo, c) => memo + c, 0);

  const map = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    const c = s[i];
    map.set(c, (map.get(c) ?? 0) + cost[i]);
  }

  let ans = total;
  map.forEach(value => {
    ans = Math.min(ans, total - value);
  });

  return ans;
}

export {};
