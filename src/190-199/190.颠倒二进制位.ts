function reverseBits(n: number): number {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      ans |= 1 << (31 - i);
    }
  }

  return ans >>> 0;
}

export { reverseBits };
