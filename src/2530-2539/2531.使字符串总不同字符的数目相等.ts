function isItPossible(word1: string, word2: string): boolean {
  const freq1 = new Array<number>(26).fill(0);
  const freq2 = new Array<number>(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < word2.length; i++) {
    freq2[word2.charCodeAt(i) - 97]++;
  }

  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < 26; i++) {
    count1 += freq1[i] > 0 ? 1 : 0;
    count2 += freq2[i] > 0 ? 1 : 0;
  }

  for (let i = 0; i < 26; i++) {
    if (freq1[i] <= 0) continue;

    for (let j = 0; j < 26; j++) {
      if (freq2[j] <= 0) continue;

      let sCount1 = count1;
      let sCount2 = count2;
      if (i !== j) {
        if (freq1[i] === 1) sCount1 -= 1;
        if (freq1[j] === 0) sCount1 += 1;
        if (freq2[j] === 1) sCount2 -= 1;
        if (freq2[i] === 0) sCount2 += 1;
      }

      if (sCount1 === sCount2) return true;
    }
  }

  return false;
}

export {};
