const Directions: [x: number, y: number][] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
];

function updateBoard(board: string[][], click: number[]): string[][] {
  const m = board.length;
  const n = board[0].length;
  const [i, j] = click;

  if (board[i][j] === "M") {
    board[i][j] = "X";
  } else {
    dfs(i, j);
  }

  return board;

  function dfs(i: number, j: number) {
    let count = 0;
    for (const [dx, dy] of Directions) {
      const x = i + dx;
      const y = j + dy;
      if (x < 0 || x >= m || y < 0 || y >= n) continue;

      if (board[x][y] === "M") {
        count++;
      }
    }

    if (count === 0) {
      board[i][j] = "B";

      for (const [dx, dy] of Directions) {
        const x = i + dx;
        const y = j + dy;
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== "E") continue;

        dfs(x, y);
      }
    } else {
      board[i][j] = count.toString();
    }
  }
}

export { updateBoard };
