class SnapshotArray {
  private arr: number[][];
  private snapId: number;

  constructor(length: number) {
    this.snapId = 0;
    this.arr = Array.from({ length }, () => []);
  }

  set(index: number, val: number): void {
    this.arr[index][this.snapId] = val;
  }

  snap(): number {
    return this.snapId++;
  }

  get(index: number, snap_id: number): number {
    let id = snap_id;
    while (id >= 0 && this.arr[index][id] === undefined) {
      id--;
    }
    return id < 0 ? 0 : this.arr[index][id];
  }
}

export { SnapshotArray };
