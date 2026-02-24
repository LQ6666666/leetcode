function hasAllCodes(s: string, k: number): boolean {
  const n = s.length;

  const set = new Set<string>();
  for (let i = 0; i <= n - k; i++) {
    set.add(s.slice(i, i + k));
  }

  return set.size === 1 << k;
}

export { hasAllCodes };
