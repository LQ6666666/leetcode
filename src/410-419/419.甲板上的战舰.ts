function countBattleships(board: string[][]): number {
  const m = board.length;
  const n = board[0].length;

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "X") {
        ans++;
        dfs(i, j);
      }
    }
  }

  return ans;

  function dfs(i: number, j: number) {
    if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === "X") {
      board[i][j] = ".";

      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  }
}

export { countBattleships };
