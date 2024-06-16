function hammingDistance(x: number, y: number): number {
  let num = x ^ y;
  let ans = 0;
  while (num) {
    if (num & 1) {
      ans++;
    }
    num >>= 1;
  }
  return ans;
}

export { hammingDistance };
