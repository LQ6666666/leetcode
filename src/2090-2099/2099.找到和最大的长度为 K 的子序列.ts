function maxSubsequence(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  const arr = nums
    .concat()
    .sort((a, b) => b - a)
    .slice(0, k);
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const ans = new Array<number>(k);
  let i = 0;
  for (const num of nums) {
    const count = map.get(num) ?? 0;
    if (count > 0) {
      ans[i++] = num;
      map.set(num, count - 1);
    }
  }

  return ans;
}

export { maxSubsequence };
