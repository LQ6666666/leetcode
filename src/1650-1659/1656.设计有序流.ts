class OrderedStream {
  private ptr: number;
  private stream: string[];

  constructor(n: number) {
    this.ptr = 1;
    this.stream = new Array(n + 1);
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey] = value;

    const ans: string[] = [];
    if (this.ptr === idKey) {
      while (this.stream[this.ptr] !== undefined) {
        ans.push(this.stream[this.ptr]);
        this.ptr++;
      }
    }

    return ans;
  }
}

export { OrderedStream };
