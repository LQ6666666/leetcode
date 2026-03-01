function minDistinctFreqPair(nums: number[]): number[] {
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  nums = Array.from(countMap.keys()).sort((a, b) => a - b);
  const n = nums.length;

  let x = nums[0];
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (countMap.get(x) !== countMap.get(num)) {
      return [x, nums[i]];
    }
  }

  return [-1, -1];
}

export {};
