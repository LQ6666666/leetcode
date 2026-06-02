function digitFrequencyScore(n: number): number {
  const freq = new Array<number>(10).fill(0);
  while (n) {
    freq[n % 10]++;
    n = Math.floor(n / 10);
  }
  let ans = 0;
  for (let i = 0; i < 10; i++) {
    ans += freq[i] * i;
  }
  return ans;
}

export {};
