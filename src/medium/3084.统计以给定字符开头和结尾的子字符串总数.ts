function countSubstrings(s: string, c: string): number {
  const n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return (count * (count + 1)) / 2;
}

export { countSubstrings };
