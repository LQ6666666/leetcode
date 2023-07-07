function longestAlternatingSubarray(nums: number[], threshold: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > threshold || nums[i] % 2 !== 0) continue;

    let j = i + 1;
    while (j < n && nums[j] <= threshold && nums[j] % 2 !== nums[j - 1] % 2) {
      j++;
    }
    ans = Math.max(ans, j - i);
    i = j - 1;
  }

  return ans;
}

export { longestAlternatingSubarray };
