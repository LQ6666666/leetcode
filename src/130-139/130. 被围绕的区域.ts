export { };

function solve(board: string[][]): void {
  const m = board.length, n = board[0].length;

  // 上下边框
  for (let i = 0; i < n; i++) {
    dfs(0, i);
    dfs(m - 1, i);
  }

  // 左右边框
  for (let i = 1; i < m - 1; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = board[i][j];

      if (value === "O") {
        board[i][j] = "X";
      } else if (value === "A") {
        board[i][j] = "O";
      }
    }
  }

  function dfs(x: number, y: number): void {
    const value = board[x]?.[y];
    if (value === undefined || value === "A" || value === "X") return;
    board[x][y] = "A";

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }
};

const test1 = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
solve(test1);
console.dir(test1);

const test2 = [["X"]];
solve(test2);
console.dir(test2);

