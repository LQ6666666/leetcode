function sumBase(n: number, k: number): number {
  let ans = 0;
  let x = n;
  while (x) {
    ans += x % k;
    x = Math.floor(x / k);
  }
  return ans;
}

export { sumBase };
