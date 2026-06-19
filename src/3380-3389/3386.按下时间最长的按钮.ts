function buttonWithLongestTime(events: number[][]): number {
  const n = events.length;
  let [ans, max] = events[0];
  for (let i = 1; i < n; i++) {
    if (events[i][1] - events[i - 1][1] > max) {
      max = events[i][1] - events[i - 1][1];
      ans = events[i][0];
    } else if (events[i][1] - events[i - 1][1] === max) {
      ans = Math.min(events[i][0], ans);
    }
  }
  return ans;
}

export {};
