function maxDigitRange(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();

  let maxRange = -1;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let x = num;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    while (x) {
      const y = x % 10;
      max = Math.max(max, y);
      min = Math.min(min, y);
      x = Math.floor(x / 10);
    }
    const range = max - min;
    maxRange = Math.max(maxRange, range);
    map.set(range, (map.get(range) ?? 0) + num);
  }

  return map.get(maxRange)!;
}

export { maxDigitRange };
