class MyStack1 {
  private queue1: number[];
  private queue2: number[];

  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x: number): void {
    this.queue1.push(x);
    while (this.queue2.length) {
      this.queue1.push(this.queue2.shift()!);
    }

    this.queue2 = this.queue1;
    this.queue1 = [];
  }

  pop(): number {
    return this.queue2.shift() ?? -1;
  }

  top(): number {
    return this.queue2[0];
  }

  empty(): boolean {
    return this.queue2.length === 0;
  }
}

class MyStack {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    const n = this.queue.length;
    this.queue.push(x);

    for (let i = 0; i < n; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift() ?? -1;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export {};
