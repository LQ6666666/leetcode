const VowelSet = new Set(["a", "e", "i", "o", "u"]);

function maxVowels(s: string, k: number): number {
  const n = s.length;
  let ans = 0;

  let count = 0;
  for (let l = 0, r = 0; l <= r && r < n; r++) {
    while (r - l >= k) {
      if (VowelSet.has(s[l])) {
        count--;
      }
      l++;
    }

    if (VowelSet.has(s[r])) {
      count++;
    }

    ans = Math.max(ans, count);
  }

  return ans;
}

export { maxVowels };
