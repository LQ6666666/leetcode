class Cashier {
  private index: number;
  private productPriceMap: Map<number, number>;

  constructor(
    private n: number,
    private discount: number,
    products: number[],
    prices: number[]
  ) {
    this.index = 0;
    this.productPriceMap = new Map();

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const price = prices[i];
      this.productPriceMap.set(product, price);
    }
  }

  getBill(product: number[], amount: number[]): number {
    this.index++;
    let x = 0;
    for (let i = 0; i < product.length; i++) {
      const price = this.productPriceMap.get(product[i])!;
      x += price * amount[i];
    }

    let result: number = x;
    if (this.index === this.n) {
      result = x - (this.discount * x) / 100;
    }

    this.index %= this.n;
    return result;
  }
}

export {};
