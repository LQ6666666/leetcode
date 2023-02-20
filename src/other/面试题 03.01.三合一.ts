class TripleInOne {
  private stack: number[];
  constructor(public stackSize: number) {
    // 使用一个位置记录每个栈待插入的下标
    this.stack = new Array((stackSize + 1) * 3).fill(0);
  }

  push(stackNum: number, value: number): void {
    const size = this.getStackNumSize(stackNum);

    if (size < this.stackSize) {
      const startIndex = this.getStackNumStartIndex(stackNum);
      this.stack[startIndex + size] = value;
      this.stack[this.getStackNumSizeIndex(stackNum)]++;
    }
  }

  pop(stackNum: number): number {
    if (this.isEmpty(stackNum)) return -1;

    const startIndex = this.getStackNumStartIndex(stackNum);
    const size = this.getStackNumSize(stackNum);
    this.stack[this.getStackNumSizeIndex(stackNum)]--;
    return this.stack[startIndex + size - 1];
  }

  peek(stackNum: number): number {
    if (this.isEmpty(stackNum)) return -1;

    const startIndex = this.getStackNumStartIndex(stackNum);
    const size = this.getStackNumSize(stackNum);
    return this.stack[startIndex + size - 1];
  }

  isEmpty(stackNum: number): boolean {
    return this.getStackNumSize(stackNum) === 0;
  }

  private getStackNumStartIndex(stackNum: number): number {
    return stackNum * (this.stackSize + 1) + 1;
  }

  private getStackNumSizeIndex(stackNum: number): number {
    return stackNum * (this.stackSize + 1);
  }

  private getStackNumSize(stackNum: number): number {
    return this.stack[this.getStackNumSizeIndex(stackNum)];
  }
}

export { TripleInOne };
