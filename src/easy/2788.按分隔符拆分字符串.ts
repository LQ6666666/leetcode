function splitWordsBySeparator(words: string[], separator: string): string[] {
  const ans: string[] = [];
  for (const word of words) {
    ans.push(...word.split(separator).filter(Boolean));
  }
  return ans;
}

export { splitWordsBySeparator };
