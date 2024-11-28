function findPrimePairs(n: number): number[][] {
  const isPrime = new Array<boolean>(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      for (let j = 0; j <= n; j += i) {
        if (j !== i) {
          isPrime[j] = false;
        }
      }
    }
  }

  const ans: [number, number][] = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      if (i <= n - i) {
        ans.push([i, n - i]);
      }
    }
  }

  return ans;
}

export { findPrimePairs };
