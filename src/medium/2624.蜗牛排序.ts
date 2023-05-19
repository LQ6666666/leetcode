declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
  const nums: number[] = this;
  const n = nums.length;
  if (rowsCount * colsCount !== nums.length) return [];

  const ans: number[][] = Array.from({ length: rowsCount }, () => new Array(colsCount));

  let i = 0;
  let row = 0;
  let col = 0;
  let flag = 1;

  while (i < n) {
    const num = nums[i++];
    ans[row][col] = num;
    row += flag;

    if (row === rowsCount || row === -1) {
      col++;
      flag = -flag;
      row += flag;
    }
  }
  return ans;
};

export {};
