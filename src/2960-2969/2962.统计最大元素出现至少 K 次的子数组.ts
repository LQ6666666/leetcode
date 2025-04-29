function countSubarrays(nums: number[], k: number): number {
  const max = Math.max(...nums);
  const n = nums.length;
  let ans = 0;

  let count = 0;
  for (let i = 0, j = 0; j < n; j++) {
    if (nums[j] === max) {
      count++;
    }

    while (count === k) {
      if (nums[i] === max) {
        count--;
      }
      i++;
    }

    ans += i;
  }

  return ans;
}

export { countSubarrays };
