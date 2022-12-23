function checkIfPangram(sentence: string): boolean {
  const n = sentence.length;
  if (n < 26) return false;

  const counts = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    counts[sentence[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (counts[i] === 0) {
      return false;
    }
  }

  return true;
}

export { checkIfPangram };
