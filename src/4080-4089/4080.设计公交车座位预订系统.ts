class BusBooking {
  private times: [A: number, B: number, C: number, D: number][];
  private totalTime: number;
  private bookedNum: number;

  constructor(n: number) {
    this.totalTime = 0;
    this.bookedNum = 0;
    this.times = Array.from({ length: n + 1 }, () => [0, 0, 0, 0]);
  }

  toggle(seat: string): void {
    const row = +seat.slice(1);
    const col = seat.charCodeAt(0) - 65;

    const rowTimes = this.times[row];

    if (rowTimes[col] === 0) {
      const time = (col === 0 && rowTimes[1] > 0) || (col === 3 && rowTimes[2] > 0) ? 3 : 1;
      this.totalTime += time;
      rowTimes[col] = time;
      this.bookedNum++;
    } else {
      this.totalTime -= rowTimes[col];
      rowTimes[col] = 0;
      this.bookedNum--;
    }
  }

  getTotalTime(): number {
    return this.totalTime;
  }

  getMinTime(): number {
    return this.bookedNum;
  }
}

export {};
