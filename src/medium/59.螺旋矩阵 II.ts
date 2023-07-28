function generateMatrix(n: number): number[][] {
  const ans = Array.from({ length: n }, () => new Array<number>(n));

  let num = 1;
  let startI = 0;
  let startJ = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      ans[startI][startJ + i] = num++;
    }
    for (let i = 0; i < n - 1; i++) {
      ans[startI + 1 + i][startJ + n - 1] = num++;
    }
    for (let i = 0; i < n - 1; i++) {
      ans[startI + n - 1][startJ + n - 2 - i] = num++;
    }
    for (let i = 0; i < n - 2; i++) {
      ans[startI + n - 2 - i][startJ] = num++;
    }

    n -= 2;
    startI++;
    startJ++;
  }

  return ans;
}

export {};
