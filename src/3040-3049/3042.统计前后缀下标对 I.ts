function countPrefixSuffixPairs(words: string[]): number {
  const n = words.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        ans++;
      }
    }
  }
  return ans;
}

function isPrefixAndSuffix(str1: string, str2: string): boolean {
  if (str2.startsWith(str1) && str2.endsWith(str1)) {
    return true;
  }
  return false;
}

export { countPrefixSuffixPairs };
