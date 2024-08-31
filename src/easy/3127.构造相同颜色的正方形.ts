function canMakeSquare(grid: string[][]): boolean {
  // 3 x 3 的矩阵就 4 个点
  const coordinates: [i: number, j: number][] = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ];

  for (const [i, j] of coordinates) {
    const a = grid[i][j] === "B" ? 1 : 0;
    const b = grid[i][j + 1] === "B" ? 1 : 0;
    const c = grid[i + 1][j] === "B" ? 1 : 0;
    const d = grid[i + 1][j + 1] === "B" ? 1 : 0;

    if (a + b + c + d >= 3) {
      return true;
    } else if (a + b + c + d <= 1) {
      return true;
    }
  }

  return false;
}

export { canMakeSquare };
