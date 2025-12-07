import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function eatenApples(apples: number[], days: number[]): number {
  const n = apples.length;
  const pq = new MinPriorityQueue<[day: number, x: number]>(([day]) => day);

  let ans = 0;
  for (let i = 0; i < n || !pq.isEmpty(); i++) {
    while (!pq.isEmpty() && pq.front()[0] === i) {
      pq.dequeue();
    }
    if (i < n && apples[i] > 0) {
      pq.enqueue([i + days[i], apples[i]]);
    }
    if (!pq.isEmpty()) {
      ans++;
      pq.front()[1]--;
      if (pq.front()[1] === 0) {
        pq.dequeue();
      }
    }
  }

  return ans;
}

export {};
