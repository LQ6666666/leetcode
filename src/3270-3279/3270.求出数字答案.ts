function generateKey(num1: number, num2: number, num3: number): number {
  let ans = 0;
  let base = 1;

  while (num1 > 0 || num2 > 0 || num3 > 0) {
    const num = Math.min(num1 % 10, num2 % 10, num3 % 10);
    ans += base * num;
    base *= 10;

    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    num3 = Math.floor(num3 / 10);
  }
  return ans;
}

export { generateKey };
