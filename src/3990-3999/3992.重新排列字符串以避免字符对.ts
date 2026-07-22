function rearrangeString(s: string, x: string, y: string): string {
  const n = s.length;
  let t = "";
  let prefix = "";
  let suffix = "";
  for (let i = 0; i < n; i++) {
    if (s[i] === x) {
      suffix += x;
    } else if (s[i] === y) {
      prefix += y;
    } else {
      t += s[i];
    }
  }
  return `${prefix}${t}${suffix}`;
}

export {};
