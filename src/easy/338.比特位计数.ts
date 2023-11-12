function countBits(n: number): number[] {
  const ans = new Array<number>(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    let count = 0;
    let x = i;
    let j = 0;
    while (x > 0) {
      count += (x >> j) & 1;
      x = x >> 1;
    }
    ans[i] = count;
  }

  return ans;
}

export { countBits };
