function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort(([priceA], [priceB]) => priceA - priceB);

  const m = items.length;
  for (let i = 1; i < m; i++) {
    items[i][1] = Math.max(items[i][1], items[i - 1][1]);
  }

  const n = queries.length;
  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = items.length - 1;
    let index = -1;

    while (left <= right) {
      const middle = left + ((right - left) >> 1);
      const price = items[middle][0];
      if (price <= queries[i]) {
        index = middle;
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    ans[i] = index === -1 ? 0 : items[index][1];
  }

  return ans;
}

export { maximumBeauty };
