function isPossibleToSplit(nums: number[]): boolean {
  const set1 = new Set<number>();
  const set2 = new Set<number>();

  for (const num of nums) {
    if (set1.has(num) && set2.has(num)) {
      return false;
    }

    if (set1.has(num)) {
      set2.add(num);
    } else {
      set1.add(num);
    }
  }

  return true;
}

export { isPossibleToSplit };
