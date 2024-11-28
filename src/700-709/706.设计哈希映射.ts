class MyHashMap {
  static readonly BASE = 769;
  static hash(key: number): number {
    return key % MyHashMap.BASE;
  }

  private data: [key: number, value: number][][];

  constructor() {
    this.data = Array.from({ length: MyHashMap.BASE }, () => []);
  }

  put(key: number, value: number): void {
    const h = MyHashMap.hash(key);
    for (const item of this.data[h]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }
    this.data[h].push([key, value]);
  }

  get(key: number): number {
    const h = MyHashMap.hash(key);
    for (const [k, value] of this.data[h]) {
      if (k === key) {
        return value;
      }
    }

    return -1;
  }

  remove(key: number): void {
    const h = MyHashMap.hash(key);
    for (let i = 0; i < this.data[h].length; i++) {
      if (this.data[h][i][0] === key) {
        this.data[h].splice(i, 1);
        return;
      }
    }
  }
}

export { MyHashMap };
