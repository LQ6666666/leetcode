// class NumArray {
//   constructor(private nums: number[]) {}

//   update(index: number, val: number): void {
//     this.nums[index] = val;
//   }

//   sumRange(left: number, right: number): number {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//       sum += this.nums[i];
//     }
//     return sum;
//   }
// }

class NumArray {
  private tree: number[];
  private n: number;

  constructor(private nums: number[]) {
    this.n = nums.length;
    this.tree = new Array(this.n + 1).fill(0);
    for (let i = 0; i < this.n; i++) {
      this.add(i + 1, nums[i]);
    }
  }

  private lowbit(x: number): number {
    return x & -x;
  }

  private query(x: number): number {
    let ans = 0;
    for (let i = x; i > 0; i -= this.lowbit(i)) {
      ans += this.tree[i];
    }
    return ans;
  }
  private add(x: number, u: number) {
    for (let i = x; i <= this.n; i += this.lowbit(i)) {
      this.tree[i] += u;
    }
  }

  update(index: number, val: number): void {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
  }

  sumRange(left: number, right: number): number {
    return this.query(right + 1) - this.query(left);
  }
}

export { NumArray };
