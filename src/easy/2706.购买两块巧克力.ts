function buyChoco(prices: number[], money: number): number {
  // 最小
  let first = Number.MAX_SAFE_INTEGER;
  // 第二小
  let second = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    if (price < first) {
      second = first;
      first = price;
    } else if (price < second) {
      second = price;
    }
  }

  const remain = money - (first + second);
  return remain >= 0 ? remain : money;
}

export {};
