function allPathsSourceTarget(graph: number[][]): number[][] {
  const n = graph.length;
  const ans: number[][] = [];
  const path: number[] = [0];
  dfs(0);
  return ans;

  function dfs(x: number) {
    if (x === n - 1) {
      ans.push(path.slice());
      return;
    }

    for (const y of graph[x]) {
      path.push(y);
      dfs(y);
      path.pop();
    }
  }
}

export { allPathsSourceTarget };
