function mergeAlternately(word1: string, word2: string): string {
  const len = Math.min(word1.length, word2.length);

  let ans = "";
  for (let i = 0; i < len; i++) {
    ans += word1[i] + word2[i];
  }

  if (word1.length > word2.length) {
    ans += word1.slice(len);
  } else if (word1.length < word2.length) {
    ans += word2.slice(len);
  }

  return ans;
}

export { mergeAlternately };
