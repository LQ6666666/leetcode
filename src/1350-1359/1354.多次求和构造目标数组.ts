import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function isPossible(target: number[]): boolean {
  let sum = target.reduce((memo, x) => memo + x, 0);

  const pq = new MaxPriorityQueue<number>();
  for (const x of target) {
    pq.enqueue(x);
  }

  while (pq.front() > 1) {
    let x = pq.dequeue();
    // 减去 x 后，sum 为其余元素之和
    sum -= x;

    if (sum === 0 || x <= sum) {
      return false;
    }

    x = ((x - 1) % sum) + 1;
    sum += x;
    pq.enqueue(x);
  }

  return true;
}

export {};
