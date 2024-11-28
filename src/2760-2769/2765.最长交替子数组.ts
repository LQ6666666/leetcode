function alternatingSubarray(nums: number[]): number {
  const n = nums.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let j = i;
    let count = 0;
    while (j < n && count % 2 === 0 ? nums[j] === num : nums[j] === num + 1) {
      j++;
      count++;
    }
    if (count > 1) {
      ans = Math.max(ans, count);
    }
  }
  return ans;
}

export {};
