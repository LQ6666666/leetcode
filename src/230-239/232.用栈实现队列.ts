class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    this.checkOutStack();
    return this.outStack.pop()!;
  }

  peek(): number {
    this.checkOutStack();
    return this.outStack.at(-1)!;
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  private checkOutStack() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
  }
}

export { MyQueue };
