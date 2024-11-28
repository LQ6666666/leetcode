function vowelStrings(words: string[], queries: number[][]): number[] {
  const result = words.map(isVowel);
  const n = words.length;
  const prefixSum: number[] = new Array(n).fill(0);
  prefixSum[0] = +result[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = +result[i] + prefixSum[i - 1];
  }

  const m = queries.length;
  const ans = new Array<number>(m);
  for (let i = 0; i < m; i++) {
    const [l, r] = queries[i];

    if (l === 0) {
      ans[i] = prefixSum[r];
    } else {
      ans[i] = prefixSum[r] - prefixSum[l - 1];
    }
  }

  return ans;
}

const vowelSet = new Set("aeiou");
function isVowel(word: string) {
  return vowelSet.has(word.at(0)!) && vowelSet.has(word.at(-1)!);
}

export { vowelStrings };
