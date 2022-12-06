function minScore(n: number, roads: number[][]): number {
  let ans = Number.MAX_VALUE;

  // 记录当前节点是否被访问过
  const visits = new Set<number>();
  const graph: number[][][] = Array.from({ length: n + 1 }, () => []);

  // 添加道路的关联信息
  for (const [a, b, distance] of roads) {
    graph[a].push([b, distance]);
    graph[b].push([a, distance]);
  }

  return dfs(1), ans;

  function dfs(start: number) {
    // 标记此时该节点正在被访问
    visits.add(start);
    // 获取这条道路可以去的地方
    for (const [to, distance] of graph[start]) {
      ans = Math.min(ans, distance);
      if (!visits.has(to)) {
        dfs(to);
      }
    }
  }
}

// console.log(
//   minScore(4, [
//     [1, 2, 9],
//     [2, 3, 6],
//     [2, 4, 5],
//     [1, 4, 7]
//   ])
// );

export { minScore };
