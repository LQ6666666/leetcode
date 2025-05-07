function checkString(s: string): boolean {
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (s[i] === "a" && s[i - 1] === "b") {
      return false;
    }
  }
  return true;
}

export { checkString };
