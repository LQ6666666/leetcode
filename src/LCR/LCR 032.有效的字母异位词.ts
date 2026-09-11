function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length || s === t) return false;
  const [a, b] = [s, t].map(x => x.split("").sort().join(""));
  return a === b;
}

export {};
