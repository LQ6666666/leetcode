function countTriplets(nums: number[]): number {
  const cnt = new Array<number>(1 << 16).fill(0);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cnt[nums[i] & nums[j]]++;
    }
  }

  let ans = 0;
  for (const num of nums) {
    for (let i = 0; i < 1 << 16; i++) {
      if ((num & i) === 0) {
        ans += cnt[i];
      }
    }
  }

  return ans;
}

export {};
