class StackOfPlates {
  private stacks: number[][];
  constructor(public cap: number) {
    this.stacks = [];
  }

  push(val: number): void {
    if (this.cap == 0) return;

    if (this.stacks.length === 0) {
      this.stacks.push([]);
    }

    if (this.stacks.at(-1)!.length === this.cap) {
      this.stacks.push([]);
    }

    this.stacks.at(-1)!.push(val);
  }

  pop(): number {
    return this.popAt(this.stacks.length - 1);
  }

  popAt(index: number): number {
    if (this.cap == 0) return -1;
    if (index < 0 || index >= this.stacks.length) return -1;

    const stack = this.stacks[index];

    const value = stack.pop()!;
    if (stack.length === 0) {
      this.stacks.splice(index, 1);
    }
    return value;
  }
}

export { StackOfPlates };
