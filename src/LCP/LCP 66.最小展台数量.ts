function minNumBooths(demand: string[]): number {
  const counts = new Array<number>(26).fill(0);

  const n = demand.length;
  for (let i = 0; i < n; i++) {
    const m = demand[i].length;

    const innerCounts = new Array<number>(26).fill(0);
    for (let j = 0; j < m; j++) {
      innerCounts[demand[i].charCodeAt(j) - 97]++;
    }

    for (let j = 0; j < 26; j++) {
      if (innerCounts[j] > counts[j]) {
        counts[j] += innerCounts[j] - counts[j];
      }
    }
  }

  return counts.reduce((acc, num) => acc + num, 0);
}

export { minNumBooths };
