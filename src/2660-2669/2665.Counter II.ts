type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

class Counter {
  public value: number;
  constructor(public originValue: number) {
    this.value = this.originValue;
  }

  increment() {
    return ++this.value;
  }

  decrement() {
    return --this.value;
  }

  reset() {
    return (this.value = this.originValue);
  }
}

function createCounter(init: number): ReturnObj {
  return new Counter(init);
}

export {};
