function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  const n = s.length;
  const m = indices.length;

  const map = new Map<number, [string, string]>();
  for (let i = 0; i < m; i++) {
    map.set(indices[i], [sources[i], targets[i]]);
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    const val = map.get(i);

    if (val) {
      const [source, target] = val;
      // 匹配
      let index = 0;
      const len = source.length;
      while (index < len && s[i + index] === source[index]) {
        index++;
      }
      if (index !== len) {
        ans += s[i];
      } else {
        ans += target;
        i += len - 1;
      }
    } else {
      ans += s[i];
    }
  }

  return ans;
}

export { findReplaceString };
