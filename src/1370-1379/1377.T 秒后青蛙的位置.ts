function frogPosition(n: number, edges: number[][], t: number, target: number): number {
  const g: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of edges) {
    g[from].push(to);
    g[to].push(from);
  }

  // 是否访问过
  const visits = new Array<boolean>(n + 1).fill(false);
  visits[0] = true;

  // [顶点id, 概率]
  let queue: [number, number][] = [[1, 1.0]];
  while (queue.length && t >= 0) {
    const next: typeof queue = [];

    for (const [id, p] of queue) {
      // 当前顶点的相邻顶点中未被访问过的顶点的个数
      // 减去(id === 1 ? 0 : 1) 是因为: 如果不是 1 ，说明它是从父节点来的，需要减去“父节点-子节点”这条边
      const cnt = g[id].length - (id === 1 ? 0 : 1);

      // 如果 id = target，说明青蛙已经到达目标顶点
      if (id === target) {
        // cut 为 0 或者 t 为 0
        return cnt * t === 0 ? p : 0;
      }

      for (const v of g[id]) {
        if (!visits[v]) {
          visits[v] = true;
          next.push([v, p / cnt]);
        }
      }
    }

    t--;
    queue = next;
  }

  return 0;
}

export { frogPosition };
