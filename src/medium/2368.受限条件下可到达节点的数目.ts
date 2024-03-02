function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
  const g: number[][] = Array.from({ length: n }, () => []);

  for (const [x, y] of edges) {
    g[x].push(y);
    g[y].push(x);
  }

  const set = new Set(restricted);

  let ans = 0;
  dfs(0);

  return ans;

  function dfs(x: number) {
    if (set.has(x)) return;
    ans++;
    set.add(x);

    for (const y of g[x]) {
      dfs(y);
    }
  }
}

export {};
