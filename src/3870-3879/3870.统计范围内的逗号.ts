function countCommas(n: number): number {
  let ans = 0;
  for (let low = 1000; low <= n; low *= 1000) {
    ans += n - low + 1;
  }
  return ans;
}

export {};
