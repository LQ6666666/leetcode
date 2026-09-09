function doesAliceWin(s: string): boolean {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if ("aeiou".includes(s[i])) {
      return true;
    }
  }
  return false;
}

export {};
