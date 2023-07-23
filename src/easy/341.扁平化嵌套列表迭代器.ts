interface NestedInteger {
  isInteger(): boolean;
  getInteger(): number | null;
  getList(): NestedInteger[];
}

class NestedIterator {
  private list: number[];
  private index: number;
  constructor(nestedList: NestedInteger[]) {
    this.list = this.dfs(nestedList);
    this.index = 0;
  }

  private dfs(nestedList: NestedInteger[]): number[] {
    const result: number[] = [];
    for (const nested of nestedList) {
      if (nested.isInteger()) {
        result.push(nested.getInteger()!);
      } else {
        const list = this.dfs(nested.getList());
        for (const num of list) {
          result.push(num);
        }
      }
    }
    return result;
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  next(): number {
    return this.list[this.index++];
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */

export {};
