function maxNumOfMarkedIndices(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  // 开区间
  let left = 0,
    right = Math.floor(n / 2) + 1;
  while (left + 1 < right) {
    const middle = left + ((right - left) >> 1);

    if (check(middle)) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return left * 2;

  function check(k: number): boolean {
    for (let i = 0; i < k; i++) {
      if (2 * nums[i] > nums[n - k + i]) {
        return false;
      }
    }
    return true;
  }
}

export { maxNumOfMarkedIndices };
