function maximumSubsequenceCount(text: string, pattern: string): number {
  const n = text.length;
  let left = 0;
  let right = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const ch = text[i];
    if (ch === pattern[1]) {
      ans += left;
      right++;
    }
    if (ch === pattern[0]) {
      left++;
    }
  }

  ans += Math.max(left, right);
  return ans;
}

export { maximumSubsequenceCount };
