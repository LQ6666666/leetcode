function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
  const n = edges.length + 1;
  const graph = Array.from({ length: n }, (): [number, number][] => []);
  for (const [from, to, wight] of edges) {
    graph[from].push([to, wight]);
    graph[to].push([from, wight]);
  }

  const ans: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let prev = 0;
    for (const [to, wight] of graph[i]) {
      const count = dfs(to, i, wight % signalSpeed);
      ans[i] += prev * count;
      prev += count;
    }
  }

  return ans;

  function dfs(p: number, root: number, curr: number): number {
    let result = 0;
    if (curr === 0) {
      result++;
    }
    for (const [to, wight] of graph[p]) {
      if (to !== root) {
        result += dfs(to, p, (curr + wight) % signalSpeed);
      }
    }
    return result;
  }
}

export { countPairsOfConnectableServers };
