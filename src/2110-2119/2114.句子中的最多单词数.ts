function mostWordsFound(sentences: string[]): number {
  let ans = -1;
  for (const sentence of sentences) {
    ans = Math.max(sentence.split(" ").length, ans);
  }
  return ans;
}

export { mostWordsFound };
