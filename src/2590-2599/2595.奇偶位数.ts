function evenOddBit(n: number): number[] {
  const ans = [0, 0];
  let flag: 0 | 1 = 0;

  while (n > 0) {
    ans[flag] += n & 1;

    flag ^= 1;

    n >>= 1;
  }

  return ans;
}

export { evenOddBit };
