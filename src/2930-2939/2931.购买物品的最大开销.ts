function maxSpending(values: number[][]): number {
  const m = values.length;
  const n = values[0].length;
  const len = m * n;
  const arr = new Array<number>(len);
  let index = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[index++] = values[i][j];
    }
  }

  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans += arr[i] * (i + 1);
  }
  return ans;
}

export {};
