function numPairsDivisibleBy60(time: number[]): number {
  const n = time.length;
  const map = new Array<number>(60).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += map[(60 - (time[i] % 60)) % 60];
    map[time[i] % 60]++;
  }

  return ans;
}

export {};
