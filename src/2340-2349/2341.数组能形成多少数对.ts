function numberOfPairs(nums: number[]): number[] {
  const set = new Set<number>();

  let count = 0;
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
      count++;
    } else {
      set.add(num);
    }
  }

  return [count, set.size];
}
  
export { numberOfPairs };
