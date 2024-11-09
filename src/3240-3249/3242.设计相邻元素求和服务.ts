class NeighborSum {
  private n: number;
  private map: [row: number, col: number][];

  constructor(public grid: number[][]) {
    this.n = grid.length;
    this.map = new Array(this.n * this.n - 1);
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.map[grid[i][j]] = [i, j];
      }
    }
  }

  adjacentSum(value: number): number {
    const [i, j] = this.map[value];
    let sum = 0;
    sum += this.helper(i + 1, j);
    sum += this.helper(i - 1, j);
    sum += this.helper(i, j + 1);
    sum += this.helper(i, j - 1);
    return sum;
  }

  diagonalSum(value: number): number {
    const [i, j] = this.map[value];
    let sum = 0;
    sum += this.helper(i + 1, j + 1);
    sum += this.helper(i - 1, j + 1);
    sum += this.helper(i + 1, j - 1);
    sum += this.helper(i - 1, j - 1);
    return sum;
  }

  helper(i: number, j: number): number {
    if (i < 0 || i >= this.n || j < 0 || j >= this.n) return 0;
    return this.grid[i][j];
  }
}

export { NeighborSum };
