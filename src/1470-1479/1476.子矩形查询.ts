class SubrectangleQueries {
  private history: [row1: number, col1: number, row2: number, col2: number, newValue: number][];

  constructor(private rectangle: number[][]) {
    this.history = [];
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    this.history.push([row1, col1, row2, col2, newValue]);
  }

  getValue(row: number, col: number): number {
    for (let i = this.history.length - 1; i >= 0; i--) {
      const [row1, col1, row2, col2, value] = this.history[i];
      if (row1 <= row && row <= row2 && col1 <= col && col <= col2) {
        return value;
      }
    }
    return this.rectangle[row][col];
  }
}

export { SubrectangleQueries };
