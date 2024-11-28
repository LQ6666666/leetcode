function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  const n = players.length;
  const m = trainers.length;

  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const p = players[i];
    const t = trainers[j];

    if (p <= t) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i;
}

export { matchPlayersAndTrainers };
