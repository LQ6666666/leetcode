function largestInteger(n: number, s: number): number {
  if (s > 9 * n) {
    return -1;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const d = Math.min(s, 9);
    ans = ans * 10 + d;
    s -= d;
  }

  return ans;
}

export {};
