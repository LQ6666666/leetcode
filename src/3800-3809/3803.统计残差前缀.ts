function residuePrefixes(s: string): number {
  const n = s.length;
  const set = new Set<string>();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    set.add(s[i]);
    if (set.size === (i + 1) % 3) {
      ans++;
    }
  }

  return ans;
}

export {};
