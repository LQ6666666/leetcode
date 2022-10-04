function commonFactors(a: number, b: number): number {
  const n = Math.min(a, b);

  let ans = 1;
  for (let i = 2; i <= n; i++) {
    if (a % i === 0 && b % i === 0) {
      ans++;
    }
  }
  return ans;
};

export { commonFactors };
