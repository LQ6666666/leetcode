function minRotations(s: string): number {
  const n = s.length;
  let ans = 0;
  let pre = 0;
  for (let i = 0; i < n; i++) {
    const x = +s[i];
    ans += Math.min(Math.abs(x - pre), pre + 10 - x, Math.abs(pre - (x + 10)));
    pre = x;
  }
  return ans;
}

export {};
