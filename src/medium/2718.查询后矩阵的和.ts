function matrixSumQueries(n: number, queries: number[][]): number {
  let ans = 0;
  const visRow = new Set<number>();
  const visCol = new Set<number>();
  for (let i = queries.length - 1; i >= 0; i--) {
    const [type, index, val] = queries[i];
    if ((type === 0 && visRow.has(index)) || (type === 1 && visCol.has(index))) {
      continue;
    }

    if (type === 0) {
      ans += (n - visCol.size) * val;
      visRow.add(index);
    } else {
      ans += (n - visRow.size) * val;
      visCol.add(index);
    }
  }

  return ans;
}

export { matrixSumQueries };
