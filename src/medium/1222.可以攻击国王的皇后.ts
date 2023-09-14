const positions = [
  [1, 0],
  [1, 1],
  [1, -1],
  [0, 1],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [-1, 1]
];

function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  const set = new Set(queens.map(v => v.join(",")));

  const ans: number[][] = [];
  for (let i = 0; i < 8; i++) {
    const [dRow, dCol] = positions[i];
    let row = king[0];
    let col = king[1];

    while (row < 8 && row >= 0 && col < 8 && col >= 0) {
      (row += dRow), (col += dCol);

      const pos = [row, col];
      if (set.has(pos.join(","))) {
        ans.push(pos);
        break;
      }
    }
  }

  return ans;
}

export { queensAttacktheKing };
