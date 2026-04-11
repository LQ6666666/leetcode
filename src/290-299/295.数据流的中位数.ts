import { PriorityQueue } from "@datastructures-js/priority-queue";

class MedianFinder {
  private minPq: PriorityQueue<number>;
  private maxPq: PriorityQueue<number>;

  constructor() {
    this.minPq = new PriorityQueue((a, b) => b - a);
    this.maxPq = new PriorityQueue((a, b) => a - b);
  }

  addNum(num: number): void {
    if (this.minPq.isEmpty() || num <= this.minPq.front()) {
      this.minPq.enqueue(num);
      if (this.maxPq.size() + 1 < this.minPq.size()) {
        this.maxPq.enqueue(this.minPq.dequeue());
      }
    } else {
      this.maxPq.enqueue(num);
      if (this.maxPq.size() > this.minPq.size()) {
        this.minPq.enqueue(this.maxPq.dequeue());
      }
    }
  }

  findMedian(): number {
    if (this.minPq.size() > this.maxPq.size()) {
      return this.minPq.front();
    } else {
      return (this.minPq.front() + this.maxPq.front()) / 2;
    }
  }
}

export {};
