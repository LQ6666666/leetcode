function minimumCost(s: string): number {
  const n = s.length;

  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (s[i - 1] !== s[i]) {
      ans += Math.min(i, n - i);
    }
  }

  return ans;
}

export { minimumCost };
