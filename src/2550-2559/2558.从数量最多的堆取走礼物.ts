import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function pickGifts(gifts: number[], k: number): number {
  const mq = new MaxPriorityQueue<number>();

  for (const gift of gifts) {
    mq.enqueue(gift);
  }

  for (let i = 0; i < k; i++) {
    mq.enqueue(Math.floor(Math.sqrt(mq.dequeue())));
  }

  return mq.toArray().reduce((acc, num) => acc + num, 0);
}

export { pickGifts };
