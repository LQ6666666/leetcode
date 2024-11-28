function singleNumber(nums: number[]): number {
  const bitwise = new Array<number>(32).fill(0);

  for (const num of nums) {
    for (let i = 0; i < 32; i++) {
      bitwise[i] += (num >> i) & 1;
    }
  }

  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans += bitwise[i] % 3 << i;
  }

  return ans;
}

export { singleNumber };
