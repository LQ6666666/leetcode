function isAcronym(words: string[], s: string): boolean {
  const n = words.length;
  if (n !== s.length) return false;

  for (let i = 0; i < n; i++) {
    if (words[i][0] !== s[i]) {
      return false;
    }
  }

  return true;
}

export {};
