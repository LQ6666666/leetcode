function allPathsSourceTarget(graph: number[][]): number[][] {
  const n = graph.length;
  const ans: number[][] = [];
  const paths: number[] = [0];
  dfs(0);
  return ans;

  function dfs(x: number): void {
    if (x === n - 1) {
      ans.push(paths.slice());
      return;
    }

    for (const y of graph[x]) {
      paths.push(y);
      dfs(y);
      paths.pop();
    }
  }
}

export { allPathsSourceTarget };
