import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class SeatManager {
  private pq: MinPriorityQueue<number>;

  constructor(n: number) {
    this.pq = new MinPriorityQueue<number>();

    for (let i = 1; i <= n; i++) {
      this.pq.enqueue(i);
    }
  }

  reserve(): number {
    return this.pq.dequeue();
  }

  unreserve(seatNumber: number): void {
    this.pq.enqueue(seatNumber);
  }
}

export { SeatManager };
