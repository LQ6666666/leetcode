function rankTeams(votes: string[]): string {
  const n = votes.length;
  if (n === 1) return votes[0];

  const m = votes[0].length;
  const map = new Map<string, number[]>();

  for (let i = 0; i < n; i++) {
    const vote = votes[i];
    for (let j = 0; j < m; j++) {
      const ch = vote[j];
      const counts: number[] = map.get(ch) ?? new Array(m).fill(0);
      counts[j]++;
      map.set(ch, counts);
    }
  }

  const keys = Array.from(map.keys());
  keys.sort((a, b) => {
    const countsA = map.get(a)!;
    const countsB = map.get(b)!;

    for (let i = 0; i < m; i++) {
      const countA = countsA[i];
      const countB = countsB[i];
      if (countA === countB) continue;

      return countB - countA;
    }

    return a.localeCompare(b);
  });

  return keys.join("");
}

export {};
