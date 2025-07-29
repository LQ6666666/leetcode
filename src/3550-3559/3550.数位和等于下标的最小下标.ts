function smallestIndex(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    if (sum === i) {
      return i;
    }
  }

  return -1;
}

export { smallestIndex };
