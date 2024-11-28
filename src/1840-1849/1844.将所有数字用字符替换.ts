function replaceDigits(s: string): string {
  const n = s.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      ans += s[i];
    } else {
      ans += shift(s[i - 1], +s[i]);
    }
  }
  return ans;
}

function shift(c: string, x: number): string {
  return String.fromCharCode(c.charCodeAt(0) + x);
}

export {};
