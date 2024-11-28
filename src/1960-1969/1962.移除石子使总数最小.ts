import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function minStoneSum(piles: number[], k: number): number {
  const mq = new MaxPriorityQueue<number>();
  for (const pile of piles) {
    mq.enqueue(pile);
  }

  for (let i = 0; i < k; i++) {
    const pile = mq.dequeue();
    mq.enqueue(pile - Math.floor(pile / 2));
  }

  return mq.toArray().reduce((acc, num) => acc + num, 0);
}

export {};
