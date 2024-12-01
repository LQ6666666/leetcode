function countGoodNodes(edges: number[][]): number {
  const n = edges.length + 1;
  const g: number[][] = Array.from({ length: n }, () => []);
  for (const [x, y] of edges) {
    g[x].push(y);
    g[y].push(x);
  }
  let ans = 0;

  const dfs = (node: number, parent: number): number => {
    let valid = true;
    let treeSize = 0;
    let subTreeSize = 0;

    for (const child of g[node]) {
      if (child !== parent) {
        const size = dfs(child, node);
        if (subTreeSize === 0) {
          subTreeSize = size;
        } else if (size !== subTreeSize) {
          valid = false;
        }
        treeSize += size;
      }
    }
    if (valid) {
      ans++;
    }
    return treeSize + 1;
  };

  dfs(0, -1);
  return ans;
}

export { countGoodNodes };
