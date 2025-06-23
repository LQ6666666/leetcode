function minBitFlips(start: number, goal: number): number {
  let x = start ^ goal;
  let ans = 0;
  while (x) {
    if ((x & 1) === 1) {
      ans++;
    }

    x >>= 1;
  }
  return ans;
}

export { minBitFlips };
