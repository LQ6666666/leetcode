function minPenalty(period: number, lights: number[], arrivalTime: number[]): number {
  const mx = Math.max(...lights);

  let ans = 0;
  for (const t of arrivalTime) {
    const a = t % period;
    if (a >= mx) {
      ans = Math.max(ans, period - a);
    }
  }
  return ans;
}

export {};
