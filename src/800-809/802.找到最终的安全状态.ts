function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  // 白色（用 0 表示）：该节点尚未被访问
  // 灰色（用 1 表示）：该节点位于递归栈中，或者在某个环上
  // 黑色（用 2 表示）：该节点搜索完毕，是一个安全节点
  const color = new Array<0 | 1 | 2>(n).fill(0);

  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (safe(i)) {
      ans.push(i);
    }
  }

  return ans;

  function safe(x: number): boolean {
    if (color[x] > 0) {
      return color[x] === 2;
    }
    color[x] = 1;
    for (const y of graph[x]) {
      if (!safe(y)) {
        return false;
      }
    }
    color[x] = 2;
    return true;
  }
}

export {};
