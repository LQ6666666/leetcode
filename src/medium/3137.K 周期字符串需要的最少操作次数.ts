function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  const n = word.length;
  /** 分成的子字符串的数量 */
  const size = n / k;
  // 子字符串的 Map
  const map = new Map<string, number>();
  /** 重复的子字符串的最大数量 */
  let max = 0;
  for (let i = 0; i < n; i += k) {
    const key = word.slice(i, i + k);
    let value = map.get(key) ?? 0;
    map.set(key, ++value);
    max = Math.max(value, max);
  }

  return size - max;
}

export { minimumOperationsToMakeKPeriodic };
