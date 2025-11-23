function timeRequiredToBuy(tickets: number[], k: number): number {
  const n = tickets.length;
  let ans = 0;
  let i = 0;
  while (tickets[k] > 0) {
    if (tickets[i] > 0) {
      tickets[i]--;
      ans++;
    }

    i = (i + 1) % n;
  }
  return ans;
}

export {};
