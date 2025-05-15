function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = words.length;
  const ans: string[] = [];
  for (let i = 0; i < n; i++) {
    if (n + 1 > n && groups[i] !== groups[i + 1]) {
      ans.push(words[i]);
    }
  }
  return ans;
}

export { getLongestSubsequence };
