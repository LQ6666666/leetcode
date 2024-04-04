function getAncestors(n: number, edges: number[][]): number[][] {
  const graph = Array.from<unknown, number[]>({ length: n }, () => []);
  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  const ans: number[][] = Array.from<unknown, number[]>({ length: n }, () => []);
  const visits = new Array<number>(n).fill(-1);

  let start = 0;
  for (; start < n; start++) {
    dfs(start);
  }

  return ans;

  function dfs(x: number) {
    // 避免每次都重新初始化 visits
    visits[x] = start;
    for (const y of graph[x]) {
      if (visits[y] !== start) {
        ans[y].push(start);
        dfs(y);
      }
    }
  }
}

export {};
