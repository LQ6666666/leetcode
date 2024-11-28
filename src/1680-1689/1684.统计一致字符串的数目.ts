function countConsistentStrings(allowed: string, words: string[]): number {
  const count = new Array(26).fill(0);
  for (const ch of allowed) {
    count[ch.charCodeAt(0) - 97] = 1;
  }

  let ans = words.length;
  for (const word of words) {
    for (const ch of word) {
      if (count[ch.charCodeAt(0) - 97] === 0) {
        ans--;
        break;
      }
    }
  }

  return ans;
}

export { countConsistentStrings };
