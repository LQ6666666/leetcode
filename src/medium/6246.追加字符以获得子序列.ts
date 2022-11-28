function appendCharacters(s: string, t: string): number {
  const n = s.length;
  let i = 0,
    j = 0;

  while (i < n) {
    if (s[i] === t[j]) {
      j++;
    }

    i++;
  }

  return t.length - j;
}

export { appendCharacters };
