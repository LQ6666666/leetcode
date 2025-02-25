class Allocator {
  private static Empty = -1;

  private arr: number[];

  constructor(public n: number) {
    this.arr = new Array(n).fill(-1);
  }

  allocate(size: number, mID: number): number {
    let count = 0;
    let i = 0;
    for (; i < this.n && count < size; i++) {
      if (this.arr[i] === Allocator.Empty) {
        count++;
      } else {
        count = 0;
      }
    }
    // 空间不足
    if (count < size) {
      return -1;
    }
    const start = i - count;
    this.arr.fill(mID, start, i);
    return start;
  }

  freeMemory(mID: number): number {
    let count = 0;
    for (let i = 0; i < this.n; i++) {
      if (this.arr[i] === mID) {
        count++;
        this.arr[i] = Allocator.Empty;
      }
    }
    return count;
  }
}

export { Allocator };
