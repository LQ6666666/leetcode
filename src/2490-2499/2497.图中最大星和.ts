function maxStarSum(vals: number[], edges: number[][], k: number): number {
  const n = vals.length;
  const g: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    if (vals[b] > 0) {
      g[a].push(b);
    }
    if (vals[a] > 0) {
      g[b].push(a);
    }
  }

  for (let i = 0; i < n; i++) {
    g[i].sort((a, b) => vals[b] - vals[a]);
  }

  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    const arr = g[i].length > k ? g[i].slice(0, k) : g[i];
    let sum = vals[i];
    for (const no of arr) {
      sum += vals[no];
    }
    ans = Math.max(ans, sum);
  }

  return ans;
}
export { maxStarSum };
