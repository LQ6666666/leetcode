function isSubstringPresent(s: string): boolean {
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (s.includes(s[i] + s[i - 1])) {
      return true;
    }
  }
  return false;
}

export { isSubstringPresent };
