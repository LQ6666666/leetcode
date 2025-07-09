function minDeletion(s: string, k: number): number {
  const n = s.length;
  const map = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  const keys = Array.from(map.keys());
  keys.sort((a, b) => map.get(a)! - map.get(b)!);

  let i = 0;
  let ans = 0;
  while (i < keys.length - k) {
    ans += map.get(keys[i++])!;
  }
  return ans;
}

export { minDeletion };
