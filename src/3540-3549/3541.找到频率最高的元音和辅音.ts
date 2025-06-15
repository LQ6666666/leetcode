const VowelSet = new Set<number>(
  ["a", "e", "i", "o", "u"].map(letter => letter.charCodeAt(0) - 97)
);

function maxFreqSum(s: string): number {
  const n = s.length;
  const counts = new Array<number>(26).fill(0);

  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  let vowelMax = 0;
  let consonantMax = 0;

  for (let i = 0; i < 26; i++) {
    if (VowelSet.has(i)) {
      vowelMax = Math.max(counts[i], vowelMax);
    } else {
      consonantMax = Math.max(counts[i], consonantMax);
    }
  }

  return vowelMax + consonantMax;
}

export { maxFreqSum };
