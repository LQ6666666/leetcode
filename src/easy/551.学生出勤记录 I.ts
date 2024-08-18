function checkRecord(s: string): boolean {
  const n = s.length;
  let absent = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "A") {
      absent++;

      if (absent >= 2) {
        return false;
      }
    } else if (s[i] === "L") {
      if (i - 2 >= 0 && s[i - 1] === "L" && s[i - 2] === "L") {
        return false;
      }
    }
  }
  return true;
}

export { checkRecord };
