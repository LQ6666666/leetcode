function sortBy(arr: any[], fn: (x: any) => number): any[] {
  const map = new Map<number, number>();
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    map.set(fn(arr[i]), i);
  }

  const keys = Array.from(map.keys());
  keys.sort((a, b) => a - b);

  const ans = new Array<any>(n);
  for (let i = 0; i < n; i++) {
    const index = map.get(keys[i])!;
    ans[i] = arr[index];
  }

  return ans;
}

export { sortBy };
