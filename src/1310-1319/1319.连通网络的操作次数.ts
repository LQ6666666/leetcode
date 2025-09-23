function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) return -1;

  const graph = Array.from<unknown, number[]>({ length: n }, () => []);

  for (const [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visits = new Array<boolean>(n).fill(false);
  // 连通块数量
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visits[i]) {
      dfs(i);
      count++;
    }
  }

  return count - 1;

  function dfs(i: number) {
    if (visits[i]) return;

    visits[i] = true;
    for (const j of graph[i]) {
      dfs(j);
    }
  }
}

export { makeConnected };
