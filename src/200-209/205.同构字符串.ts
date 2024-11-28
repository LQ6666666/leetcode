function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  const set = new Set<string>();
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const ch = map.get(s[i]);

    if (ch === undefined) {
      if (set.has(t[i])) return false;

      set.add(t[i]);
      map.set(s[i], t[i]);
    } else if (ch !== t[i]) {
      return false;
    }
  }

  return true;
}

export { isIsomorphic };
