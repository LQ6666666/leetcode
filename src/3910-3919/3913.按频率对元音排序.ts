function sortVowels(s: string): string {
  const n = s.length;
  const countMap = new Map<string, number>();
  const indexMap = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (isVowel(c)) {
      if (!indexMap.has(c)) {
        indexMap.set(c, i);
      }
      countMap.set(c, (countMap.get(c) ?? 0) + 1);
    }
  }

  const keys = Array.from(countMap.keys());
  keys.sort((a, b) => {
    const aCount = countMap.get(a)!;
    const bCount = countMap.get(b)!;
    if (aCount === bCount) {
      return indexMap.get(a)! - indexMap.get(b)!;
    } else {
      return bCount - aCount;
    }
  });

  const strs: string[] = [];
  for (const key of keys) {
    for (let i = 0; i < countMap.get(key)!; i++) {
      strs.push(key);
    }
  }

  let index = 0;
  let ans = "";
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (isVowel(c)) {
      ans += strs[index++];
    } else {
      ans += c;
    }
  }
  return ans;
}

const isVowel = (c: string) => c === "a" || c === "e" || c === "i" || c === "o" || c === "u";

export {};
