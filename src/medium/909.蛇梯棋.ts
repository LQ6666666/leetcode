function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const visits = new Array<0 | 1>(n * n + 1).fill(0);
  const queue: [id: number, count: number][] = [[1, 0]];

  while (queue.length) {
    const [id, count] = queue.shift()!;

    for (let i = 1; i <= 6; i++) {
      let nextId = id + i;
      let nextCount = count + 1;

      if (id > n * n) {
        break;
      }

      const [row, col] = helper(nextId);
      if (board[row][col] !== -1) {
        nextId = board[row][col];
      }

      if (nextId === n * n) {
        return nextCount;
      }

      if (!visits[nextId]) {
        visits[nextId] = 1;
        queue.push([nextId, nextCount]);
      }
    }
  }

  return -1;

  // 计算出编号在棋盘中的对应行列
  function helper(id: number) {
    let r = Math.floor((id - 1) / n),
      c = (id - 1) % n;
    if (r % 2 === 1) {
      c = n - 1 - c;
    }
    return [n - 1 - r, c];
  }
}

export { snakesAndLadders };
