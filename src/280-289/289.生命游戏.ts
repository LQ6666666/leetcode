function gameOfLife(board: number[][]): void {
  const m = board.length;
  const n = board[0].length;

  const copyBoard = Array.from({ length: m }, () => new Array<number>(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      copyBoard[i][j] = board[i][j];
    }
  }

  const neighbors = [0, 1, -1];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // 对于每一个细胞统计其八个相邻位置里的活细胞数量
      let live = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
            const r = row + neighbors[i];
            const c = col + neighbors[j];

            // 查看相邻的细胞是否是活细胞
            if (r < m && r >= 0 && c < n && c >= 0 && copyBoard[r][c] === 1) {
              live += 1;
            }
          }
        }
      }

      // 规则 1 或 规则 3
      if (copyBoard[row][col] === 1 && (live < 2 || live > 3)) {
        board[row][col] = 0;
      }
      // 规则 4
      else if (copyBoard[row][col] === 0 && live === 3) {
        board[row][col] = 1;
      }
    }
  }
}

export { gameOfLife };
