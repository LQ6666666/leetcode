function alternateDigitSum(n: number): number {
  let sign = 1;
  let ans = 0;

  while (n > 0) {
    ans += (n % 10) * sign;

    sign = -sign;
    n = Math.floor(n / 10);
  }

  return ans * -sign;
}

export { alternateDigitSum };
