const VowelSet = new Set("aeiou");

function countVowelSubstrings(word: string): number {
  const n = word.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const set = new Set<string>();
    for (let j = i; j < n; j++) {
      if (VowelSet.has(word[j])) {
        set.add(word[j]);
        if (set.size >= 5) {
          ans++;
        }
      } else {
        break;
      }
    }
  }

  return ans;
}

export {};
