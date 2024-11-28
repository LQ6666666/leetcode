function subtractProductAndSum(n: number): number {
  let x = n;
  let sum = 0;
  let product = 1;

  while (x > 0) {
    const num = x % 10;
    sum += num;
    product *= num;

    x = Math.floor(x / 10);
  }

  return product - sum;
}

export { subtractProductAndSum };
