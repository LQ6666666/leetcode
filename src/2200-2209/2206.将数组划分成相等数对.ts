function divideArray(nums: number[]): boolean {
  const counts = new Map<number, number>();
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const values = Array.from(counts.values());
  for (const count of values) {
    if (count % 2 !== 0) {
      return false;
    }
  }
  return true;
}

export { divideArray };
