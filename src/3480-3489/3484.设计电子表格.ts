class Spreadsheet {
  private map: Map<string, number>;

  constructor(rows: number) {
    this.map = new Map();
  }

  setCell(cell: string, value: number): void {
    this.map.set(cell, value);
  }

  resetCell(cell: string): void {
    this.map.delete(cell);
  }

  getValue(formula: string): number {
    const [x, y] = formula.slice(1).split("+");
    return this.helper(x) + this.helper(y);
  }

  private helper(s: string): number {
    if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) {
      return this.map.get(s) ?? 0;
    } else {
      return +s;
    }
  }
}

export { Spreadsheet };
