function duplicateNumbersXOR(nums: number[]): number {
  const set = new Set<number>();

  let ans = 0;
  for (const num of nums) {
    if (set.has(num)) {
      ans ^= num;
    } else {
      set.add(num);
    }
  }

  return ans;
}

export { duplicateNumbersXOR };
