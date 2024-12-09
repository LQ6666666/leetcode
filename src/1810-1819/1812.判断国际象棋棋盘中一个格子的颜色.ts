function squareIsWhite$(coordinates: string): boolean {
  // 1.构建棋盘
  const chessboard = Array.from({ length: 8 }, (_, y) =>
    Array.from({ length: 8 }, (_, x) => {
      const result = x % 2 === 0;

      return y % 2 === 0 ? result : !result;
    })
  );

  const col = coordinates[0].charCodeAt(0) - 97;
  const row = 8 - +coordinates[1];

  return chessboard[row][col];
}

function squareIsWhite(s: string): boolean {
  return s.charCodeAt(0) % 2 !== s.charCodeAt(1) % 2;
}

export { squareIsWhite };
