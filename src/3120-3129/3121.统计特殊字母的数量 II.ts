function numberOfSpecialChars(word: string): number {
  const n = word.length;
  const lo = new Map<string, number>();
  const up = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const c = word[i];
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90 && lo) {
      // 最小下标的大写字母
      up.set(c, Math.min(i, up.get(c) ?? Number.MAX_SAFE_INTEGER));
    } else {
      // 最大下标的小写字母
      lo.set(c, i);
    }
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    const l = lo.get(String.fromCharCode(97 + i));
    const u = up.get(String.fromCharCode(65 + i));
    if (l !== undefined && u !== undefined && l < u) {
      ans++;
    }
  }

  return ans;
}

export { numberOfSpecialChars };
