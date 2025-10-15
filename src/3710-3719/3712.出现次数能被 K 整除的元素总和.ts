function sumDivisibleByK(nums: number[], k: number): number {
  const n = nums.length;
  const counts = new Array<number>(101).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    counts[nums[i]]++;
  }
  for (let i = 0; i <= 100; i++) {
    if (counts[i] % k === 0) {
      ans += i * counts[i];
    }
  }
  return ans;
}

export { sumDivisibleByK };
