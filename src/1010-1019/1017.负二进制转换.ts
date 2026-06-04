function baseNeg2(n: number): string {
  if (n === 0 || n === 1) return `${n}`;

  let ans = "";
  while (n !== 0) {
    const remainder = Math.abs(n % 2);
    ans = remainder + ans;
    n -= remainder;
    n /= -2;
  }

  return ans;
}

export {};
