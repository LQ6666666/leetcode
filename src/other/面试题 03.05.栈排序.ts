class SortedStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (this.isEmpty()) {
      this.stack.push(val);
      return;
    }

    const temp: number[] = [];
    while (!this.isEmpty() && val > this.peek()) {
      temp.push(this.stack.pop()!);
    }
    this.stack.push(val);
    while (temp.length) {
      this.stack.push(temp.pop()!);
    }
  }

  pop(): void {
    this.stack.pop();
  }

  peek(): number {
    return this.isEmpty() ? -1 : this.stack.at(-1)!;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

export {};
