function canMakeSubsequence(str1: string, str2: string): boolean {
  const n = str1.length;
  const m = str2.length;

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    const a = str1[i].charCodeAt(0) - 97;
    const b = str2[j].charCodeAt(0) - 97;

    if (a === b || (a + 1) % 26 === b) {
      j++;
    }
    i++;
  }

  return j === m;
}

export { canMakeSubsequence };
