function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let i = 0,
    j = 0,
    m = 0,
    n = 0;

  while (i < word1.length && j < word2.length) {
    if (word1[i][m++] === word2[j][n++]) {
      if (m === word1[i].length) {
        i++;
        m = 0;
      }
      if (n === word2[j].length) {
        j++;
        n = 0;
      }
    } else {
      return false;
    }
  }

  return i === word1.length && j === word2.length;
}

export {arrayStringsAreEqual};
