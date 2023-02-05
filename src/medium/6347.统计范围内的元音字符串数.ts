// function vowelStrings(words: string[], queries: number[][]): number[] {
//   const result = words.map(word => isVowel(word));
//   return queries.map(([left, right]) => {
//     let count = 0;
//     for (let i = left; i <= right; i++) {
//       if (result[i]) {
//         count++;
//       }
//     }
//     return count;
//   });

//   function isVowel(word: string) {
//     const set = new Set(["a", "e", "i", "o", "u"]);
//     return set.has(word.at(0)!) && set.has(word.at(-1)!);
//   }
// }

// 前缀和
function vowelStrings(words: string[], queries: number[][]): number[] {
  const n = words.length;
  const result = words.map(word => +isVowel(word));

  const prefixSum = new Array<number>(n);
  prefixSum[0] = result[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = result[i] + prefixSum[i - 1];
  }

  return queries.reduce((prev, [left, right], index) => {
    if (left === 0) {
      prev[index] = prefixSum[right];
    } else {
      prev[index] = prefixSum[right] - prefixSum[left - 1];
    }
    return prev;
  }, new Array(queries.length).fill(0));

  function isVowel(word: string) {
    const set = new Set(["a", "e", "i", "o", "u"]);
    return set.has(word.at(0)!) && set.has(word.at(-1)!);
  }
}

export { vowelStrings };
