function maxKDivisibleComponents(
  n: number,
  edges: number[][],
  values: number[],
  k: number
): number {
  const graph = Array.from<unknown, number[]>({ length: n }, () => []);
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  let ans = 0;
  dfs(0, -1);
  return ans;

  function dfs(x: number, parent: number): number {
    let sum = values[x];
    for (const y of graph[x]) {
      if (y !== parent) {
        sum += dfs(y, x);
      }
    }
    ans += sum % k === 0 ? 1 : 0;
    return sum;
  }
}

export { maxKDivisibleComponents };
