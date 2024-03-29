function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  nums.sort((a, b) => {
    const aCount = map.get(a)!;
    const bCount = map.get(b)!;

    if (aCount === bCount) {
      return b - a;
    }

    return aCount - bCount;
  });

  return nums;
};

export { };
