import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class NumberContainers {
  private indexToNumber: Map<number, number>;
  private numberToIndices: Map<number, MinPriorityQueue<number>>;

  constructor() {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();
  }

  change(index: number, number: number): void {
    this.indexToNumber.set(index, number);

    let queue = this.numberToIndices.get(number);
    if (!queue) {
      this.numberToIndices.set(number, (queue = new MinPriorityQueue()));
    }
    queue.enqueue(index);
  }

  find(number: number): number {
    const indices = this.numberToIndices.get(number);
    if (indices) {
      // 堆顶货不对板，说明是旧数据，删除
      while (!indices.isEmpty() && this.indexToNumber.get(indices.front()) != number) {
        indices.dequeue();
      }
      if (!indices.isEmpty()) {
        return indices.front();
      }
    }
    return -1;
  }
}

export { NumberContainers };
