function maxConsecutive(bottom: number, top: number, special: number[]): number {
  special.push(bottom - 1);
  special.push(top + 1);
  special.sort((a, b) => a - b);
  const n = special.length;
  let ans = 0;

  for (let i = 1; i < n; i++) {
    ans = Math.max(special[i] - special[i - 1] - 1, ans);
  }

  return ans;
}

export { maxConsecutive };
