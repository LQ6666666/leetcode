function colorTheArray(n: number, queries: number[][]): number[] {
  const m = queries.length;
  let cnt = 0;
  const ans = new Array<number>(m);
  const a = new Array<number>(n + 2).fill(0);
  for (let qi = 0; qi < m; qi++) {
    const [i, c] = queries[qi];
    if (a[i] > 0) {
      cnt -= (a[i] === a[i - 1] ? 1 : 0) + (a[i] === a[i + 1] ? 1 : 0);
    }
    a[i] = c;
    cnt += (a[i] === a[i - 1] ? 1 : 0) + (a[i] === a[i + 1] ? 1 : 0);
    ans[qi] = cnt;
  }
  return ans;
}

export {};
