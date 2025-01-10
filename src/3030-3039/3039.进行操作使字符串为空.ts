function lastNonEmptyString(s: string): string {
  const n = s.length;
  const indexMap = Array.from({ length: 26 }, (): number[] => []);

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    indexMap[code].push(i);
  }

  let startIndex = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < 26; i++) {
    startIndex = Math.max(indexMap[i].length, startIndex);
  }

  startIndex = startIndex === 0 ? 0 : startIndex - 1;

  const set = new Set<number>();
  for (let i = 0; i < 26; i++) {
    for (let j = startIndex; j < indexMap[i].length; j++) {
      set.add(indexMap[i][j]);
    }
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    if (set.has(i)) {
      ans += s[i];
    }
  }

  return ans;
}

export { lastNonEmptyString };
