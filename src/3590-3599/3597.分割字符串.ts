function partitionString(s: string): string[] {
  const n = s.length;
  const ans: string[] = [];
  const set = new Set<string>();
  let temp = "";
  for (let i = 0; i < n; i++) {
    const c = temp + s[i];
    if (set.has(c)) {
      temp = c;
    } else {
      ans.push(c);
      set.add(c);
      temp = "";
    }
  }

  return ans;
}

export {};
