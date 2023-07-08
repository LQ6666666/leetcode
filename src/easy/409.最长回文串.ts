function longestPalindrome(s: string): number {
  const n = s.length;
  const countMap = new Map<string, number>();
  for (const ch of s) {
    countMap.set(ch, (countMap.get(ch) ?? 0) + 1);
  }

  let ans = 0;
  countMap.forEach(value => {
    if (value % 2 !== 0) {
      ans++;
    }
  });

  if (ans > 0) {
    return n - ans + 1;
  } else {
    return n;
  }
}

export {};
