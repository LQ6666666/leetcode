class TimeMap {
  private map: Map<string, Map<number, string>>;
  private timestampMap: Map<string, number[]>;

  constructor() {
    this.map = new Map();
    this.timestampMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    let tMap = this.map.get(key);
    if (!tMap) {
      this.map.set(key, (tMap = new Map()));
    }
    tMap.set(timestamp, value);

    let arr = this.timestampMap.get(key);
    if (!arr) {
      this.timestampMap.set(key, (arr = []));
    }
    arr.push(timestamp);
  }

  get(key: string, timestamp: number): string {
    const tMap = this.map.get(key);
    if (tMap) {
      const arr = this.timestampMap.get(key)!;
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const middle = left + ((right - left) >> 1);
        const value = arr[middle];
        if (value <= timestamp) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }

      if (tMap.has(arr[left - 1])) {
        return tMap.get(arr[left - 1])!;
      }
    }

    return "";
  }
}

export { TimeMap };
