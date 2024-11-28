class CombinationIterator {
  private s: string[];
  private list: string[];
  private index: number;

  constructor(public characters: string, public combinationLength: number) {
    this.s = [];
    this.list = [];
    this.dfs((this.index = 0));
  }

  next(): string {
    return this.list[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  private dfs(start: number): void {
    if (this.s.length === this.combinationLength) {
      this.list.push(this.s.join(""));
      return;
    }

    for (let i = start; i < this.characters.length; i++) {
      this.s.push(this.characters[i]);
      this.dfs(i + 1);
      this.s.pop();
    }
  }
}

export { CombinationIterator };
