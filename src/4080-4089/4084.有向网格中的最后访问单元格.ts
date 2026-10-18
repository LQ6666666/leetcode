function lastVisitedCell(grid: string[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;
  let x = 0;
  let y = 0;

  while (true) {
    let a = x;
    let b = y;
    switch (grid[x][y]) {
      case "L":
        b--;
        break;
      case "R":
        b++;
        break;
      case "U":
        a--;
        break;
      case "D":
        a++;
        break;
    }

    if (a >= m || a < 0 || b >= n || b < 0 || grid[a][b] === "X") {
      break;
    }

    grid[x][y] = "X";
    x = a;
    y = b;
  }

  return [x, y];
}

export {};
