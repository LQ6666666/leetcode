class RangeFreqQuery {
  private occurrence: Map<number, number[]>;

  constructor(arr: number[]) {
    const n = arr.length;
    const occurrence = (this.occurrence = new Map<number, number[]>());
    for (let i = 0; i < n; i++) {
      const num = arr[i];
      let value = occurrence.get(num);
      if (!value) {
        occurrence.set(num, (value = []));
      }
      value.push(i);
    }
  }

  query(left: number, right: number, value: number): number {
    const pos = this.occurrence.get(value) ?? [];
    // 第一个大于等于 left 的位置
    const l = this.lowerBound(pos, left);
    // 第一个小于等于 right 的位置
    const r = this.lowerBound(pos, right + 1);
    return r - l;
  }

  private lowerBound(pos: number[], target: number): number {
    let low = 0;
    let high = pos.length - 1;
    while (low <= high) {
      const mid = low + ((high - low) >> 1);
      if (pos[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low;
  }
}

export { RangeFreqQuery };
