function partitionString(s: string): number {
  const n = s.length;
  const set = new Set<string>();

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (set.has(s[i])) {
      set.clear();
      ans++;
    }
    set.add(s[i]);
  }
  return ans + 1;
}

export { partitionString };
