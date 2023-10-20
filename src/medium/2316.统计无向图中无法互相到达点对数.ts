function countPairs(n: number, edges: [x: number, y: number][]): number {
  // 首先将输入 edge 构造成临接表 graph
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  const visited = new Array<boolean>(n).fill(false);

  // 遍历与它在同一个连通分量中并且还未访问过的点，并返回访问的点数
  const dfs = function (x: number) {
    visited[x] = true;
    let count = 1;
    for (const y of graph[x]) {
      if (!visited[y]) {
        count += dfs(y);
      }
    }
    return count;
  };

  let ans = 0;
  for (let i = 0; i < n; i++) {
    // 遍历所有点，如果当前点还没有访问过，则说明遇到了一个新的连通分量
    if (!visited[i]) {
      // 通过 dfs 来计算当前连通分量的点数 count
      const count = dfs(i);
      // 这个连通分量中的所有点与这个连通分量中的所有点都无法相互到达
      // (全部的点 - 这个图的点 = 剩下的点都是不能连接的) * 这个图的点 = 就是答案
      ans += count * (n - count);
    }
  }

  // 每个点对会被计算两次，因此最后结果需要除以 2
  return Math.floor(ans / 2);
}

export { countPairs };
