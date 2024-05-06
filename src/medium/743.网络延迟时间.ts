function networkDelayTime(times: number[][], n: number, k: number): number {
  const g: number[][] = Array.from({ length: n }, () => Array(n).fill(Infinity)); // 邻接矩阵
  for (const [x, y, d] of times) {
    g[x - 1][y - 1] = d;
  }

  const dis: number[] = Array(n).fill(Infinity);
  dis[k - 1] = 0;
  const done: boolean[] = Array(n).fill(false);
  while (true) {
    let x = -1;
    for (let i = 0; i < n; i++) {
      if (!done[i] && (x < 0 || dis[i] < dis[x])) {
        x = i;
      }
    }
    if (x < 0) {
      return Math.max(...dis);
    }
    if (dis[x] === Infinity) {
      // 有节点无法到达
      return -1;
    }
    // 最短路长度已确定（无法变得更小）
    done[x] = true;
    for (let y = 0; y < n; y++) {
      // 更新 x 的邻居的最短路
      dis[y] = Math.min(dis[y], dis[x] + g[x][y]);
    }
  }
}

export { networkDelayTime };
