import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function lastStoneWeight(stones: number[]): number {
  const pq = new MaxPriorityQueue<number>();

  for (const stone of stones) {
    pq.enqueue(stone);
  }

  while (pq.size() > 1) {
    const y = pq.dequeue();
    const x = pq.dequeue();

    if (x !== y) {
      pq.enqueue(y - x);
    }
  }

  return pq.size() === 0 ? 0 : pq.dequeue();
}

export { lastStoneWeight };
