function largestAltitude(gain: number[]): number {
  const n = gain.length;

  let ans = Math.max(0, gain[0]);
  for (let i = 1; i < n; i++) {
    gain[i] += gain[i - 1];
    ans = Math.max(gain[i], ans);
  }

  return ans;
}

export {};
