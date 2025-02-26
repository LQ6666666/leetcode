class BrowserHistory {
  private stack: string[];
  private p: number;

  constructor(homepage: string) {
    this.stack = [homepage];
    this.p = 0;
  }

  visit(url: string): void {
    while (this.stack.length - 1 > this.p) {
      this.stack.pop();
    }

    this.stack.push(url);
    this.p = this.stack.length - 1;
  }

  back(steps: number): string {
    this.p = Math.max(0, this.p - steps);
    return this.stack[this.p];
  }

  forward(steps: number): string {
    this.p = Math.min(this.stack.length - 1, this.p + steps);
    return this.stack[this.p];
  }
}

export { BrowserHistory };
