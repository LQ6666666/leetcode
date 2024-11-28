function takeCharacters(s: string, k: number): number {
  const counts = new Array<number>(26).fill(0);
  const n = s.length;
  let ans = n;

  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  if (counts[0] < k || counts[1] < k || counts[2] < k) return -1;

  let left = 0;
  for (let right = 0; right < n; right++) {
    counts[s.charCodeAt(right) - 97]--;

    while (left < right && (counts[0] < k || counts[1] < k || counts[2] < k)) {
      counts[s.charCodeAt(left) - 97]++;
      left++;
    }

    if (counts[0] >= k && counts[1] >= k && counts[2] >= k) {
      ans = Math.min(ans, n - (right - left + 1));
    }
  }

  return ans;
}

export { takeCharacters };
