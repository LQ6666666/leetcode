function scoreValidator(events: string[]): number[] {
  const n = events.length;
  const ans: [score: number, counter: number] = [0, 0];
  for (let i = 0; i < n; i++) {
    const event = events[i];
    switch (event) {
      case "W":
        ans[1]++;
        if (ans[1] === 10) {
          return ans;
        }
        break;
      case "WD":
        ans[0]++;
        break;
      case "NB":
        ans[0]++;
        break;
      default:
        ans[0] += +event;
    }
  }
  return ans;
}

export {};
