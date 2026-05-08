function minimumPushes(word: string): number {
  const n = word.length;

  const countMap = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    const c = word[i];
    countMap.set(c, (countMap.get(c) ?? 0) + 1);
  }

  console.log(countMap);

  const keys = Array.from(countMap.keys());
  keys.sort((a, b) => countMap.get(b)! - countMap.get(a)!);

  let ans = 0;
  for (let i = 0; i < keys.length; i++) {
    const count = countMap.get(keys[i])!;

    ans += (Math.floor(i / 8) + 1) * count;
  }

  return ans;
}

export {};
