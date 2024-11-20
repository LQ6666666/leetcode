const VowelIndexMap: Record<string, number> = {
  A: 0,
  E: 1,
  I: 2,
  O: 3,
  U: 4,
  a: 5,
  e: 6,
  i: 7,
  o: 8,
  u: 9
};

const IndexVowelMap: Record<number, string> = {
  0: "A",
  1: "E",
  2: "I",
  3: "O",
  4: "U",
  5: "a",
  6: "e",
  7: "i",
  8: "o",
  9: "u"
};

function sortVowels(s: string): string {
  const n = s.length;
  const counts = new Array<number>(10).fill(0);

  for (let i = 0; i < n; i++) {
    if (Object.hasOwn(VowelIndexMap, s[i])) {
      counts[VowelIndexMap[s[i]]]++;
    }
  }

  let ans = "";
  for (let i = 0, j = 0; i < n; i++) {
    if (Object.hasOwn(VowelIndexMap, s[i])) {
      while (counts[j] === 0 && j < 10) {
        j++;
      }

      ans += IndexVowelMap[j];
      counts[j]--;
    } else {
      ans += s[i];
    }
  }

  return ans;
}

export { sortVowels };
