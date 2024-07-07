const dir: [number, number][] = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1]
];

function checkMove(board: string[][], rMove: number, cMove: number, color: string): boolean {
  const n = 8;

  for (let i = 0; i < n; i++) {
    const [x, y] = dir[i];
    let row = rMove + x;
    let col = cMove + y;
    let count = 1;
    while (row < n && col < n && row >= 0 && col >= 0) {
      count++;
      if (board[row][col] === ".") {
        break;
      }

      if (board[row][col] === color) {
        if (count >= 3) {
          return true;
        }
        break;
      }

      row += x;
      col += y;
    }
  }

  return false;
}

export { checkMove };
