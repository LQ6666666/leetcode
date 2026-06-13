function smallestAbsent(nums: number[]): number {
  const n = nums.length;
  const set = new Set<number>();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    set.add(num);
    sum += num;
  }
  const average = Math.floor(sum / n);
  let i = Math.max(average, 0) + 1;
  while (true) {
    if (set.has(i)) {
      i++;
    } else {
      return i;
    }
  }
}

export {};
