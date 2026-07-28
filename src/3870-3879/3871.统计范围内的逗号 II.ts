function countCommas(n: number): number {
  let ans = 0;
  for (let i = 1000; i <= n; i *= 1000) {
    ans += n - i + 1;
  }
  return ans;
}

export {};
