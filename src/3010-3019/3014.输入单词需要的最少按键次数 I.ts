function minimumPushes(word: string): number {
  const n = word.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.ceil((i + 1) / 8);
  }
  return ans;
}

export { minimumPushes };
