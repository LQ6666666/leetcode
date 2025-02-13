function unhappyFriends(n: number, preferences: number[][], pairs: number[][]): number {
  const order = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      order[i][preferences[i][j]] = j;
    }
  }
  const match = new Array<number>(n).fill(0);
  for (const [p0, p1] of pairs) {
    match[p0] = p1;
    match[p1] = p0;
  }

  let ans = 0;
  for (let x = 0; x < n; x++) {
    const y = match[x];
    const index = order[x][y];
    for (let i = 0; i < index; i++) {
      const u = preferences[x][i];
      const v = match[u];
      if (order[u][x] < order[u][v]) {
        ans++;
        break;
      }
    }
  }

  return ans;
}

export { unhappyFriends };
