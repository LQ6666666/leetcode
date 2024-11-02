function minChanges(n: number, k: number): number {
  if (n === k) return 0;
  if (n < k) return -1;
  let i = n;
  let j = k;
  let ans = 0;

  while (i > 0 || j > 0) {
    if ((i & 1) === 0 && (j & 1) === 1) {
      return -1;
    }

    if ((i & 1) === 1 && (j & 1) === 0) {
      ans++;
    }

    i >>= 1;
    j >>= 1;
  }

  return ans;
}

export { minChanges };
