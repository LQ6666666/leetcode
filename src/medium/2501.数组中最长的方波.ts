function longestSquareStreak(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const set = new Set(nums);

  let ans = 0;
  for (const num of nums) {
    let x = num;
    let count = 1;
    while (set.has((x = x * x))) {
      count++;
    }
    ans = Math.max(ans, count);
  }

  return ans < 2 ? -1 : ans;
}

export {};
