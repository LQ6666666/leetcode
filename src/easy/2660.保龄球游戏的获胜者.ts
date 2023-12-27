function isWinner(player1: number[], player2: number[]): number {
  const a = helper(player1);
  const b = helper(player2);

  if (a === b) {
    return 0;
  } else {
    return a > b ? 1 : 2;
  }
}

function helper(player: number[]): number {
  const n = player.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (player[i - 1] === 10 || player[i - 2] === 10) {
      result += player[i] * 2;
    } else {
      result += player[i];
    }
  }

  return result;
}

export { isWinner };
