function countBits(n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i <= n; i++) {
    let count = 0;
    let x = i;
    while (x) {
      if ((x & 1) === 1) {
        count++;
      }
      x >>= 1;
    }
    ans.push(count);
  }

  return ans;
}

export { countBits };
