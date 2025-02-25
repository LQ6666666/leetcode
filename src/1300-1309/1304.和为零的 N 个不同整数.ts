function sumZero(n: number): number[] {
  const ans = new Array<number>(n);

  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += ans[i] = i + 1;
  }

  ans[n - 1] = -sum;

  return ans;
}

export { sumZero };
