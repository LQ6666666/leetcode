function maxProduct(n: number): number {
  let x = n;
  let first = 0;
  let second = 0;

  while (x > 0) {
    const num = x % 10;

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }

    x = Math.floor(x / 10);
  }

  return first * second;
}

export { maxProduct };
