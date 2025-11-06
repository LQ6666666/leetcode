function cycleLengthQueries(n: number, queries: number[][]): number[] {
  const m = queries.length;
  const ans = new Array<number>(m);

  for (let i = 0; i < m; i++) {
    let [a, b] = queries[i];
    let res = 1;
    while (a !== b) {
      if (a > b) {
        a = Math.floor(a / 2);
      } else {
        b = Math.floor(b / 2);
      }
      res++;
    }
    ans[i] = res;
  }

  return ans;
}

export { cycleLengthQueries };
