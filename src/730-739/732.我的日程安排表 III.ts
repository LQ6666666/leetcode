class MyCalendarThree {
  private map: Record<number, number>;

  constructor() {
    this.map = {};
  }

  book(startTime: number, endTime: number): number {
    this.map[startTime] = (this.map[startTime] ?? 0) + 1;
    this.map[endTime] = (this.map[endTime] ?? 0) - 1;

    const values = Object.values(this.map);
    let count = 0;
    let ans = 0;
    for (let value of values) {
      count += value;
      ans = Math.max(ans, count);
    }
    return ans;
  }
}

export { MyCalendarThree };
