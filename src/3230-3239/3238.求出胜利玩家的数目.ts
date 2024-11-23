function winningPlayerCount(n: number, pick: number[][]): number {
  const counts = Array.from({ length: n }, () => new Array<number>(11).fill(0));
  for (const [x, y] of pick) {
    counts[x][y]++;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 11; j++) {
      if (counts[i][j] > i) {
        ans++;
        break;
      }
    }
  }

  return ans;
}

export { winningPlayerCount };
