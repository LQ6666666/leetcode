function bitwiseComplement(n: number): number {
  if (n === 0) return 1;

  let i = 0;
  let ans = 0;
  while (n) {
    const x = (n & 1) === 1 ? 0 : 1;
    if (x === 1) {
      ans += 2 ** i;
    }
    n >>= 1;
    i++;
  }
  return ans;
}

export { bitwiseComplement };
