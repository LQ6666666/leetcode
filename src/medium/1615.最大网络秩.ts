function maximalNetworkRank(n: number, roads: number[][]): number {
  const connect = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const degree = new Array<number>(n).fill(0);

  for (const [from, to] of roads) {
    connect[from][to] = 1;
    connect[to][from] = 1;
    degree[from]++;
    degree[to]++;
  }

  let maxRank = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const rank = degree[i] + degree[j] - (connect[i][j] ? 1 : 0);
      maxRank = Math.max(maxRank, rank);
    }
  }

  return maxRank;
}

export { maximalNetworkRank };
