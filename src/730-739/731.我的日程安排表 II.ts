// 差分数组
// class MyCalendarTwo {
//   private map: Record<number, number>;

//   constructor() {
//     this.map = {};
//   }

//   book(start: number, end: number): boolean {
//     this.map[start] = (this.map[start] ?? 0) + 1;
//     this.map[end] = (this.map[end] ?? 0) - 1;

//     const values = Object.values(this.map);
//     let count = 0;
//     for (let value of values) {
//       count += value;
//       if (count > 2) {
//         this.map[start] -= 1;
//         this.map[end] += 1;
//         return false;
//       }
//     }
//     return true;
//   }
// }

class MyCalendarTwo {
  private booked: [start: number, end: number][];
  private overlaps: [start: number, end: number][];

  constructor() {
    this.booked = [];
    this.overlaps = [];
  }

  book(start: number, end: number): boolean {
    for (const arr of this.overlaps) {
      let l = arr[0],
        r = arr[1];
      if (l < end && start < r) {
        return false;
      }
    }
    for (const arr of this.booked) {
      let l = arr[0],
        r = arr[1];
      if (l < end && start < r) {
        this.overlaps.push([Math.max(l, start), Math.min(r, end)]);
      }
    }
    this.booked.push([start, end]);
    return true;
  }
}

export { MyCalendarTwo };
