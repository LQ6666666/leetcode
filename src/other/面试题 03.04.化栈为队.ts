class MyQueue {
  private stack1: number[];
  private stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.length) return this.stack2.pop()!;

    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop()!);
    }

    return this.stack2.pop()!;
  }

  peek(): number {
    if (this.empty()) return -1;
    return this.stack2.at(-1) ?? this.stack1.at(0)!;
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

export { MyQueue };
