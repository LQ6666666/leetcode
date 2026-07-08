function sumAndMultiply(n: number): number {
  let sum = 0;

  let y = 1;
  let x = 0;
  while (n) {
    const num = n % 10;
    if (num) {
      x += num * y;
      y *= 10;
      sum += num;
    }
    n = Math.floor(n / 10);
  }

  return x * sum;
}

export {};
