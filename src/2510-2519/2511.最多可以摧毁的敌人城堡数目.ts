function captureForts(forts: number[]): number {
  const n = forts.length;

  let start = -1;
  let ans = 0;

  // 1 和 -1 中间 0 的个数
  for (let i = 0; i < n; i++) {
    const fort = forts[i];
    if (fort === 1 || fort === -1) {
      if (start >= 0 && fort !== forts[start]) {
        ans = Math.max(ans, i - start - 1);
      }
      start = i;
    }
  }

  return ans;
}

export { captureForts };
