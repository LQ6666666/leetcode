function sumAndMultiply(n: number): number {
  let sum = 0;
  const nums: number[] = [];

  while (n) {
    const num = n % 10;
    if (num) {
      nums.push(num);
      sum += num;
    }
    n = Math.floor(n / 10);
  }

  let x = 0;
  nums.reverse();
  for (const num of nums) {
    x = x * 10 + num;
  }

  return x * sum;
}

export {};
