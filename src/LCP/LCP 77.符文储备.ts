function runeReserve(runes: number[]): number {
  const n = runes.length;
  let ans = 1;

  runes.sort((a, b) => a - b);
  let count = 1;
  for (let i = 1; i < n; i++) {
    const rule = runes[i];
    if (rule - runes[i - 1] <= 1) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(count, ans);
  }

  return ans;
}

export {};
