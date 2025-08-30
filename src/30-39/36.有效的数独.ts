function isValidSudoku(board: string[][]): boolean {
  // 检测行和列
  for (let i = 0; i < 9; i++) {
    const row = new Set<string>();
    const col = new Set<string>();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (row.has(board[i][j])) {
          return false;
        } else {
          row.add(board[i][j]);
        }
      }

      if (board[j][i] !== ".") {
        if (col.has(board[j][i])) {
          return false;
        } else {
          col.add(board[j][i]);
        }
      }
    }
  }

  // 检测块
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      const set = new Set<string>();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i + x][j + y] !== ".") {
            if (set.has(board[i + x][j + y])) {
              return false;
            } else {
              set.add(board[i + x][j + y]);
            }
          }
        }
      }
    }
  }
  return true;
}

export { isValidSudoku };
