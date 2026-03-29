function vowelConsonantScore(s: string): number {
  const n = s.length;
  let v = 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    if (["a", "e", "i", "o", "u"].includes(s[i])) {
      v++;
    } else {
      const code = s.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        c++;
      }
    }
  }
  return c === 0 ? 0 : Math.floor(v / c);
}

export {};
