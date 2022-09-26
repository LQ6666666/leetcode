class RecentCounter1 {
  private record: Record<number, boolean>;

  constructor() {
    this.record = Object.create(null);
  }

  ping(t: number): number {
    this.record[t] = true;

    let count = 1;
    const keys = Object.keys(this.record);
    const start = t - 3000, end = t;

    if (Reflect.has(this.record, start)) {
      count++;
    }

    for (const key of keys) {
      const num = +key;
      if (num > start && num < end) {
        count++;
      }
    }

    return count;
  }
}

class RecentCounter {
  private record: Record<number, boolean>;

  constructor() {
    this.record = Object.create(null);
  }

  ping(t: number): number {
    this.record[t] = true;

    let count = 1;
    for (let i = t - 3000; i < t; i++) {
      if (this.record[i]) {
        count++;
      }
    }

    return count;
  }
}


export { RecentCounter };
