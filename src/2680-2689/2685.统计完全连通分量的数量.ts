function countCompleteComponents(n: number, edges: number[][]): number {
  const graph = Array.from({ length: n }, (): number[] => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array<0 | 1>(n).fill(0);
  let point = 0,
    edge = 0;
  function dfs(i: number) {
    visited[i] = 1;
    point++;
    edge += graph[i].length;
    for (const x of graph[i]) {
      if (!visited[x]) {
        dfs(x);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    point = 0;
    edge = 0;
    dfs(i);
    if (point * (point - 1) === edge) {
      ans++;
    }
  }

  return ans;
}

/**
 * 在完全图中，任意两点之间都有边，相当于从 v 个点中选 2 个点的方案数。
 * 所以有
 *    e = v(v − 1)/2
 * 由于上面统计的时候，一条边统计了两次，所以代码中的判断条件是
 *    e = v(v − 1)
 */

export {};
