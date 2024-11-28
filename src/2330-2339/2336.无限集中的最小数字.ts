import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class SmallestInfiniteSet {
  private set: Set<number>;
  private mq: MinPriorityQueue<number>;

  constructor() {
    this.set = new Set<number>();
    this.mq = new MinPriorityQueue<number>();

    for (let i = 1; i < 1001; i++) {
      this.set.add(i);
      this.mq.enqueue(i);
    }
  }

  popSmallest(): number {
    if (this.mq.size() > 0) {
      const num = this.mq.dequeue();
      this.set.delete(num);
      return num;
    }

    return -1;
  }

  addBack(num: number): void {
    if (this.set.has(num)) return;

    this.set.add(num);
    this.mq.enqueue(num);
  }
}

// const smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.addBack(2); // 2 已经在集合中，所以不做任何变更。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 2 ，并将其从集合中移除。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 3 ，并将其从集合中移除。
// smallestInfiniteSet.addBack(1); // 将 1 添加到该集合中。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 1 ，因为 1 在上一步中被添加到集合中，
// // 且 1 是最小的整数，并将其从集合中移除。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 4 ，并将其从集合中移除。
// console.log(smallestInfiniteSet.popSmallest()); // 返回 5 ，并将其从集合中移除。

export { SmallestInfiniteSet };
