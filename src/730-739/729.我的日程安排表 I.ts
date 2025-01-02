class MyCalendar {
  private books: number[][];

  constructor() {
    this.books = [];
  }

  book(startTime: number, endTime: number): boolean {
    for (const [l, r] of this.books) {
      if (l < endTime && startTime < r) {
        return false;
      }
    }
    this.books.push([startTime, endTime]);
    return true;
  }
}

export { MyCalendar };
