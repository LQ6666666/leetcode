function countPalindromicSubsequence(s: string): number {
  let ans = 0;
  for (let x = 0; x < 26; x++) {
    const ch = String.fromCharCode(x + 97);
    let i = s.indexOf(ch);
    if (i === -1) continue;
    let j = s.lastIndexOf(ch);

    // 枚举中间
    const set = new Set<string>();
    for (let k = i + 1; k < j; k++) {
      if (!set.has(s[k])) {
        ans++;
        set.add(s[k]);
      }
    }
  }

  return ans;
}

export { countPalindromicSubsequence };
