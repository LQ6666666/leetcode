function frequencySort(s: string): string {
  const countMap = new Map<string, number>();
  for (const ch of s) {
    countMap.set(ch, (countMap.get(ch) ?? 0) + 1);
  }
  const keys = Array.from(countMap.keys());
  keys.sort((a, b) => countMap.get(b)! - countMap.get(a)!);

  let ans = "";
  for (const key of keys) {
    ans += key.repeat(countMap.get(key)!);
  }

  return ans;
}

export {};
