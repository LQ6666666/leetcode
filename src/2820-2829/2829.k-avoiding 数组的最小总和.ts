function minimumSum(n: number, k: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= Math.floor(k / 2)) {
      ans += i;
    } else {
      ans += i + Math.floor(k / 2) - (k % 2 === 1 ? 0 : 1);
    }
  }
  return ans;
}

export { minimumSum };
