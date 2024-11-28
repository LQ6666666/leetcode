function numRookCaptures(board: string[][]): number {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        return helper(i, j);
      }
    }
  }

  return -1;

  function helper(i: number, j: number): number {
    let result = 0;

    let left = j - 1;
    while (left >= 0) {
      if (board[i][left] === "B") {
        break;
      }

      if (board[i][left] === "p") {
        result++;
        break;
      }
      left--;
    }

    let right = j + 1;
    while (right < 8) {
      if (board[i][right] === "B") {
        break;
      }

      if (board[i][right] === "p") {
        result++;
        break;
      }
      right++;
    }

    let top = i - 1;
    while (top >= 0) {
      if (board[top][j] === "B") {
        break;
      }

      if (board[top][j] === "p") {
        result++;
        break;
      }
      top--;
    }

    let bottom = i + 1;
    while (bottom < 8) {
      if (board[bottom][j] === "B") {
        break;
      }

      if (board[bottom][j] === "p") {
        result++;
        break;
      }
      bottom++;
    }

    return result;
  }
}

export { numRookCaptures };
