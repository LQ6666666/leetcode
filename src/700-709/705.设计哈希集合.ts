class MyHashSet {
  private static readonly base = 769;
  public data: number[][];

  constructor() {
    this.data = Array.from({ length: MyHashSet.base }, () => []);
  }

  add(key: number): void {
    const index = this.find(key);
    if (index === -1) {
      this.data[this.hash(key)].push(key);
    }
  }

  remove(key: number): void {
    const index = this.find(key);
    if (index !== -1) {
      this.data[this.hash(key)].splice(index, 1);
    }
  }

  contains(key: number): boolean {
    return this.find(key) !== -1;
  }

  private find(key: number): number {
    return this.data[this.hash(key)].findIndex(element => element === key);
  }

  private hash(key: number) {
    return key % MyHashSet.base;
  }
}

export { MyHashSet };
