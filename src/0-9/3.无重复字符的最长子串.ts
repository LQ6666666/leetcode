function lengthOfLongestSubstring$(s: string): number {
  const n = s.length;
  let left = 0,
    right = 0;
  const set = new Set<string>();
  let ans = 0;

  while (right < n) {
    if (set.has(s[left])) {
      set.delete(s[left]);
      left++;
    }

    while (!set.has(s[right]) && right < n) {
      set.add(s[right]);
      right++;
    }

    ans = Math.max(ans, set.size);
  }

  return ans;
}

function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let ans = 0;

  const set = new Set<string>();
  let end = 0;
  for (let start = 0; start < n; start++) {
    while (end < n && !set.has(s[end])) {
      set.add(s[end]);
      end++;
    }
    ans = Math.max(ans, set.size);

    set.delete(s[start]);
  }

  return ans;
}

export { lengthOfLongestSubstring };
