import { PriorityQueue } from "@datastructures-js/priority-queue";

function minCost(n: number, edges: number[][]): number {
  const grid: [y: number, w: number][][] = Array.from({ length: n }, () => []);
  for (const [x, y, w] of edges) {
    grid[x].push([y, w]);
    grid[y].push([x, w * 2]);
  }

  const dis = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
  dis[0] = 0;

  const pq = new PriorityQueue<[w: number, u: number]>(([a], [b]) => a - b);

  pq.enqueue([0, 0]);
  while (pq.size()) {
    const [disX, x] = pq.dequeue()!;
    if (disX > dis[x]) {
      continue;
    }
    if (x === n - 1) {
      return disX;
    }
    for (const [y, wt] of grid[x]) {
      const newDisY = disX + wt;
      if (newDisY < dis[y]) {
        dis[y] = newDisY;
        pq.enqueue([newDisY, y]);
      }
    }
  }

  return -1;
}

export {};
