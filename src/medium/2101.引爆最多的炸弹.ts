function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length;
  const edges: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));

  // 计算与每一个炸弹是否有交集
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (distance(i, j)) {
        edges[i][j] = true;
      }
    }
  }

  let ans = 0;
  // 枚举从哪个炸弹爆炸
  for (let i = 0; i < n; i++) {
    const vis = new Array<boolean>(n).fill(false);
    let count = 0;
    let queue: number[] = [i];
    vis[i] = true;

    while (queue.length) {
      const newQueue: number[] = [];
      for (const x of queue) {
        count++;
        for (let j = 0; j < n; j++) {
          if (edges[x][j] && !vis[j]) {
            newQueue.push(j);
            vis[j] = true;
          }
        }
      }
      queue = newQueue;
    }

    ans = Math.max(ans, count);
  }

  return ans;

  function distance(a: number, b: number): boolean {
    const y2 = Math.pow(bombs[b][1] - bombs[a][1], 2);
    const x2 = Math.pow(bombs[b][0] - bombs[a][0], 2);
    return Math.pow(bombs[a][2], 2) >= x2 + y2;
  }
}

export { maximumDetonation };
