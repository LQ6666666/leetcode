export { };

function longestNiceSubarray(nums: number[]): number {
  const n = nums.length;
  let ans = 1, mask = nums[0];
  let left = 0, right = 1;

  while (right < n) {
    while ((mask & nums[right]) != 0 && left < right) {
      // 右移
      mask ^= nums[left++];
    }

    mask ^= nums[right];
    ans = Math.max(ans, right - left + 1);

    right++;
  }
  return ans;
};
