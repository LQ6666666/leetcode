function maxLengthBetweenEqualCharacters(s: string): number {
  const map = new Map<string, number>();
  const n = s.length;

  let ans = -1;

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    const index = map.get(ch);
    if (index === undefined) {
      map.set(ch, i);
    } else {
      ans = Math.max(i - index, ans);
    }
  }

  return ans == -1 ? -1 : ans - 1;
};

export { maxLengthBetweenEqualCharacters};

