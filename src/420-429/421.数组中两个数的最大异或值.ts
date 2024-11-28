function findMaximumXOR(nums: number[]): number {
  const highBit = 31 - Math.clz32(Math.max(...nums));
  let ans = 0;
  const seen = new Set<number>();
  let mask = 0;
  for (let i = highBit; i >= 0; i--) {
    seen.clear();
    mask |= 1 << i;
    const newAns = ans | (1 << i);
    for (let x of nums) {
      x &= mask;
      if (seen.has(newAns ^ x)) {
        ans = newAns;
        break;
      }
      seen.add(x);
    }
  }

  return ans;
}

export { findMaximumXOR };
