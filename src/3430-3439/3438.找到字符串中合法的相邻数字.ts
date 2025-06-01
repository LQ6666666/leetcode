function findValidPair(s: string): string {
  const n = s.length;
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const c = s[i];
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (let i = 1; i < n; i++) {
    if (s[i - 1] === s[i]) continue;
    if (map.get(s[i - 1]) === +s[i - 1] && map.get(s[i]) === +s[i]) {
      return s[i - 1] + s[i];
    }
  }

  return "";
}

export { findValidPair };
