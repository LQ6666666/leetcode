function maxMatrixSum(matrix: number[][]): number {
  const n = matrix.length;
  // 偶数个负数最后肯定可以全部变成正数
  // 奇数个负数最后不可避免的会有一个负数
  // 让矩阵中绝对值最小的数成为这个负数
  let count = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let num = matrix[i][j];
      if (num < 0) {
        count++;
        num = Math.abs(num);
      }
      sum += num;
      min = Math.min(num, min);
    }
  }

  if (count % 2 !== 0) {
    sum -= min * 2;
  }

  return sum;
}

export {};
