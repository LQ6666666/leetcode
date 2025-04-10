function appendCharacters(s: string, t: string): number {
  const n = s.length;
  const m = t.length;

  let i = 0;
  let j = 0;
  while (i < n) {
    if (s[i] === t[j]) {
      j++;
    }
    i++;
  }

  return m - j;
}

export { appendCharacters };
