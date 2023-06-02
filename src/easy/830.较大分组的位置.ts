function largeGroupPositions(s: string): number[][] {
  const ans: number[][] = [];
  const n = s.length;
  let start = 0;
  for (let i = 0; i <= n; i++) {
    const ch = s[i];
    const prev = s[i - 1];
    if (prev !== ch) {
      if (i - start >= 3) {
        ans.push([start, i - 1]);
      }
      start = i;
    }
  }
  return ans;
}

export {};
