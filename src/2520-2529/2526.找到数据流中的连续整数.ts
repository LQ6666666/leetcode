class DataStream {
  private count: number;

  constructor(private value: number, private k: number) {
    this.count = 0;
  }

  consec(num: number): boolean {
    if (num === this.value) {
      this.count++;
    } else {
      this.count = 0;
    }

    if (this.count < this.k) {
      return false;
    } else {
      return true;
    }
  }
}

export { DataStream };
