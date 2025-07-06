class FindSumPairs {
  private map: Map<number, number>;

  constructor(private nums1: number[], private nums2: number[]) {
    this.map = new Map();
    for (const num of nums2) {
      this.map.set(num, (this.map.get(num) ?? 0) + 1);
    }
  }

  add(index: number, val: number): void {
    let num = this.nums2[index];
    this.map.set(num, (this.map.get(num) ?? 0) - 1);
    num = this.nums2[index] += val;
    this.map.set(num, (this.map.get(num) ?? 0) + 1);
  }

  count(tot: number): number {
    let ans = 0;
    for (const num of this.nums1) {
      ans += this.map.get(tot - num) ?? 0;
    }
    return ans;
  }
}

export { FindSumPairs };
