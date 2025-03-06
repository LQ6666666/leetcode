function tictactoe(moves: number[][]): string {
  const grid = Array.from({ length: 3 }, () => new Array<"X" | "O">(3));

  for (let i = 0; i < moves.length; i++) {
    const x = i % 2 === 0 ? "X" : "O";
    grid[moves[i][0]][moves[i][1]] = x;
  }

  if (check("X")) {
    return "A";
  } else if (check("O")) {
    return "B";
  } else {
    return moves.length === 9 ? "Draw" : "Pending";
  }

  function check(target: "X" | "O"): boolean {
    // 列
    for (let col = 0; col < 3; col++) {
      let flag = true;
      for (let row = 0; row < 3; row++) {
        if (grid[row][col] !== target) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }

    // 行
    for (let row = 0; row < 3; row++) {
      let flag = true;
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] !== target) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }

    // 左上右下
    let row = 0;
    let col = 0;
    while (row < 3 && col < 3 && grid[row][col] === target) {
      row++;
      col++;
    }
    if (row === 3 && col === 3) {
      return true;
    }

    row = 0;
    col = 2;
    // 右上左下
    while (row < 3 && col >= 0 && grid[row][col] === target) {
      row++;
      col--;
    }
    if (row === 3 && col === -1) {
      return true;
    }

    return false;
  }
}

export { tictactoe };
