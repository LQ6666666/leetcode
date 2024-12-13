function numOfStrings(patterns: string[], word: string): number {
  let ans = 0;
  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      ans++;
    }
  }
  return ans;
}

export { numOfStrings };
