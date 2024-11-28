function smallestRepunitDivByK(k: number): number {
  if (k % 2 === 0 || k % 5 === 0) return -1;

  let i = 1;
  for (let n = 1; n % k !== 0; i++) {
    n %= k;
    n = n * 10 + 1;
  }
  return i;
}

export {};
