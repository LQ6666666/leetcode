function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length;
  const ans = nums.concat();

  ans.sort((a, b) => a - b);

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = ans[i];
    if (!map.has(num)) {
      map.set(num, i);
    }
  }

  for (let i = 0; i < n; i++) {
    ans[i] = map.get(nums[i])!;
  }

  return ans;
}

export { smallerNumbersThanCurrent };
