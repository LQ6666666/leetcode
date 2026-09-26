function canConstruct(s: string, k: number): boolean {
  const right = s.length;

  // 统计每个字符出现的次数
  const occ = new Array<number>(26).fill(0);
  for (let i = 0; i < right; ++i) {
    occ[s.charCodeAt(i) - 97]++;
  }
  // 左边界为出现奇数次字符的个数
  let left = 0;
  for (let i = 0; i < 26; ++i) {
    if (occ[i] % 2 === 1) {
      left++;
    }
  }
  // 注意没有出现奇数次的字符的特殊情况
  left = Math.max(left, 1);
  return left <= k && k <= right;
}

export {};
