function countSubstrings(s: string): number {
  const n = s.length;
  let ans = 0;

  // 遍历回文中心点
  for (let i = 0; i < n; i++) {
    // j = 0 中心是一个点, j = 1 中心是两个点
    for (let j = 0; j <= 1; j++) {
      let l = i;
      let r = i + j;
      while (l >= 0 && r < n && s[l--] === s[r++]) {
        ans++;
      }
    }
  }

  return ans;
}

export { countSubstrings };
