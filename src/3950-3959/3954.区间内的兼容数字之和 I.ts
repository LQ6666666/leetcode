function sumOfGoodIntegers(n: number, k: number): number {
  let ans = 0;
  for (let i = Math.max(n - k, 1); i <= n + k; i++) {
    if (Math.abs(n - i) <= k && (n & i) === 0) {
      ans += i;
    }
  }
  return ans;
}

export {};
