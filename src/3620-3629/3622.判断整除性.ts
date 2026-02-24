function checkDivisibility(n: number): boolean {
  let x = n;
  let sum = 0;
  let product = 1;

  while (x) {
    const a = x % 10;
    sum += a;
    product *= a;
    x = Math.floor(x / 10);
  }

  return n % (sum + product) === 0;
}

export {};
