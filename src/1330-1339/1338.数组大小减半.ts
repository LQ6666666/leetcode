function minSetSize(arr: number[]): number {
  const n = arr.length;
  const target = n >> 1;

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }

  const keys = Array.from(map.keys());
  keys.sort((a, b) => map.get(b)! - map.get(a)!);

  let ans = 0;
  let size = 0;
  while (size < target) {
    size += map.get(keys[ans])!;
    ans++;
  }

  return ans;
}

export { minSetSize };
