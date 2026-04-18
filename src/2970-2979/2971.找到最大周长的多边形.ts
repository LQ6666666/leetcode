function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = -1;
  let s = 0;
  for (const x of nums) {
    s += x;
    if (s > x * 2) {
      ans = s;
    }
  }
  return ans;
}

export {};
