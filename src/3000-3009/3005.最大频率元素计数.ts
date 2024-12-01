function maxFrequencyElements(nums: number[]): number {
  const map = new Map<number, number>();
  let max = 0;

  for (const num of nums) {
    let count = map.get(num) ?? 0;
    count++;
    map.set(num, count);
    max = Math.max(max, count);
  }

  let ans = 0;
  const counts = Array.from(map.values());
  for (const count of counts) {
    if (count === max) {
      ans += count;
    }
  }

  return ans;
}

export { maxFrequencyElements };
