class CustomStack {
  private stack: number[];
  constructor(private maxSize: number) {
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length === this.maxSize) return;

    this.stack.push(x);
  }

  pop(): number {
    if (this.stack.length === 0) {
      return -1;
    } else {
      return this.stack.pop()!;
    }
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k && i < this.stack.length; i++) {
      this.stack[i] += val;
    }
  }
}

export { CustomStack };
