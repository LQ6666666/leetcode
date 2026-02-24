function processStr(s: string): string {
  const n = s.length;
  const ans: string[] = [];
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "*") {
      ans.pop();
    } else if (c === "#") {
      ans.push(...ans);
    } else if (c === "%") {
      ans.reverse();
    } else {
      ans.push(c);
    }
  }
  return ans.join("");
}

export {};
