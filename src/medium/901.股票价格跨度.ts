class StockSpanner {
  private prices: number[];

  constructor() {
    this.prices = [];
  }

  next(price: number): number {
    // 找到大于 price的那个
    let i = this.prices.length - 1;
    while (i >= 0) {
      if (this.prices[i] > price) {
        break;
      } else {
        i--;
      }
    }

    this.prices.push(price);

    return this.prices.length - i - 1;
  }
}

class StockSpanner1 {
  // index：待插入的位置
  private index = 0;
  private prices: number[];
  // 价格列表和跨度天数列表，同一下标，一一对应关系
  private days: number[];

  constructor() {
    this.prices = new Array(10000).fill(0);
    this.days = new Array(10000).fill(0);
    this.index = 0;
  }

  next(price: number) {
    // 待对比的位置
    let p = this.index - 1;

    while (p >= 0 && this.prices[p] <= price) {
      // 向前移动 p
      p -= this.days[p];
    }

    this.prices[this.index] = price;
    this.days[this.index] = this.index - p;
    // index加 1
    return this.days[this.index++];
  }
}

export { StockSpanner };
