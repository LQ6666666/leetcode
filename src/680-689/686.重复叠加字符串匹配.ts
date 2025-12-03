function repeatedStringMatch(a: string, b: string): number {
  // 如果 b 里面有 a 不存在的字符，直接返回 -1
  const set = new Set(a);
  for (const ch of b) {
    if (!set.has(ch)) return -1;
  }

  let count = Math.floor(b.length / a.length);
  let s = a.repeat(count);
  for (let i = 0; i <= 2; i++) {
    if (s.indexOf(b) > -1) {
      return count + i;
    }
    s += a;
  }

  return -1;
}

export {};
