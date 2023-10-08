class StockPrice$ {
  private max: [number, number];
  private min: [number, number];
  private lastTime: number;
  private map: Map<number, number>;

  constructor() {
    this.lastTime = 0;
    this.map = new Map();
    this.min = [0, Infinity];
    this.max = [0, -Infinity];
  }

  update(timestamp: number, price: number): void {
    this.lastTime = Math.max(this.lastTime, timestamp);
    this.map.set(timestamp, price);

    if (price < this.min[1]) {
      this.min = [timestamp, price];
    } else if (timestamp === this.min[0]) {
      this.min = [timestamp, price];

      this.map.forEach((value, key) => {
        if (value < this.min[1]) {
          this.min = [key, value];
        }
      });
    }

    if (price > this.max[1]) {
      this.max = [timestamp, price];
    } else if (timestamp === this.max[0]) {
      this.max = [timestamp, price];
      this.map.forEach((value, key) => {
        if (value > this.max[1]) {
          this.max = [key, value];
        }
      });
    }
  }

  current(): number {
    return this.map.get(this.lastTime)!;
  }

  maximum(): number {
    return this.max[1];
  }

  minimum(): number {
    return this.min[1];
  }
}

type Item = [price: number, timestamp: number];

class StockPrice {
  private pqMax: _PriorityQueue<Item>;
  private pqMin: _PriorityQueue<Item>;
  private maxTimestamp: number;
  private timePriceMap: Map<number, number>;

  constructor() {
    this.pqMax = new _PriorityQueue(([a], [b]) => a > b);
    this.pqMin = new _PriorityQueue(([a], [b]) => a < b);
    this.maxTimestamp = Number.MIN_SAFE_INTEGER;
    this.timePriceMap = new Map();
  }

  update(timestamp: number, price: number): void {
    this.maxTimestamp = Math.max(timestamp, this.maxTimestamp);
    this.timePriceMap.set(timestamp, price);
    this.pqMax.offer([price, timestamp]);
    this.pqMin.offer([price, timestamp]);
  }

  current(): number {
    return this.timePriceMap.get(this.maxTimestamp)!;
  }

  maximum(): number {
    while (true) {
      const [price, timestamp] = this.pqMax.peek()!;
      if (price === this.timePriceMap.get(timestamp)) {
        return price;
      }
      this.pqMax.poll();
    }
  }

  minimum(): number {
    while (true) {
      const [price, timestamp] = this.pqMin.peek()!;
      if (price === this.timePriceMap.get(timestamp)) {
        return price;
      }
      this.pqMin.poll();
    }
  }
}

class _PriorityQueue<T> {
  private data: T[];
  private size: number;

  constructor(public compare: (a: T, b: T) => boolean) {
    this.data = [];
    this.size = 0;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val: T) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index: number) {
    return (index - 1) >> 1;
  }

  _child(index: number) {
    return (index << 1) + 1;
  }

  _shifDown(index: number) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index: number) {
    while (
      this._parent(index) >= 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a: number, b: number) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}

export { StockPrice };
