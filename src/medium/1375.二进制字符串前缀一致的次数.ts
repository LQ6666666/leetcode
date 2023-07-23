function numTimesAllBlue(flips: number[]): number {
  const n = flips.length;
  let ans = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(flips[i], max);
    if (max === i + 1) {
      ans++;
    }
  }

  return ans;
}


export { numTimesAllBlue };
