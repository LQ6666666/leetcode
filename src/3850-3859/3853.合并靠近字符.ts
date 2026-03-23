function mergeCharacters(s: string, k: number): string {
  const n = s.length;
  const indexMap = new Map<string, number>();

  let ans = "";
  for (let i = 0; i < n; i++) {
    const c = s[i];
    const lastIndex = indexMap.get(c);
    if (lastIndex === undefined) {
      indexMap.set(c, ans.length);
      ans += c;
    } else {
      if (ans.length - lastIndex > k) {
        indexMap.set(c, ans.length);
        ans += c;
      }
    }
  }

  return ans;
}

export {};
