function checkGoodInteger(n: number): boolean {
  let digitSum = 0;
  let squareSum = 0;

  while (n > 0) {
    const x = n % 10;
    digitSum += x;
    squareSum += x * x;
    n = Math.floor(n / 10);
  }

  return squareSum - digitSum >= 50;
}

export {};
