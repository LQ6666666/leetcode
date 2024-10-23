function countCompleteDayPairs(hours: number[]): number {
  const counts = new Array<number>(24).fill(0);
  let ans = 0;

  for (const t of hours) {
    ans += counts[(24 - (t % 24)) % 24];
    counts[t % 24]++;
  }

  return ans;
}

export { countCompleteDayPairs };
