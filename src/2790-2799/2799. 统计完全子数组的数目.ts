function countCompleteSubarrays(nums: number[]): number {
  const n = nums.length;
  const m = new Set(nums).size;

  let left = 0;
  let right = 0;
  const count = new Array<number>(2001).fill(0);

  let ans = 0;
  let res = 0;
  for (let i = 0, j = 0; j < n; j++) {
    count[nums[j]]++;
    if (count[nums[j]] == 1) {
      res++;
    }

    while (res == m) {
      ans += n - j;
      count[nums[i]]--;
      if (count[nums[i]] == 0) {
        res--;
      }
      i++;
    }
  }

  return ans;
}

export { countCompleteSubarrays };
