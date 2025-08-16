import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class KthLargest {
  private queue: MinPriorityQueue<number>;

  constructor(private k: number, nums: number[]) {
    this.queue = new MinPriorityQueue();

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    this.queue.enqueue(val);

    if (this.queue.size() > this.k) {
      this.queue.dequeue();
    }

    return this.queue.front();
  }
}

export { KthLargest };
