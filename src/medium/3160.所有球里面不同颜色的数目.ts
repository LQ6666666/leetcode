function queryResults(limit: number, queries: number[][]): number[] {
  const n = queries.length;
  const ans = new Array<number>(n);
  const colors = new Map<number, number>();
  const map = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const [x, y] = queries[i];
    const color = colors.get(x);

    if (color !== undefined) {
      const count = map.get(color)! - 1;
      map.set(color, count);

      if (count === 0) {
        map.delete(color);
      }
    }

    map.set(y, (map.get(y) ?? 0) + 1);

    colors.set(x, y);
    ans[i] = map.size;
  }

  return ans;
}

export { queryResults };
