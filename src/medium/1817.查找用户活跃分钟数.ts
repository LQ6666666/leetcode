function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const activeMinutes = new Map<number, Set<number>>();

  for (const [id, time] of logs) {
    let minutes = activeMinutes.get(id);
    if (minutes === undefined) {
      activeMinutes.set(id, (minutes = new Set<number>()));
    }
    minutes.add(time);
  }

  const ans = new Array<number>(k).fill(0);
  activeMinutes.forEach(minutes => ans[minutes.size - 1]++);

  return ans;
}

export {};
