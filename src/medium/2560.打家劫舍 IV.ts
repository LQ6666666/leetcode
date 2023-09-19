function minCapability(nums: number[], k: number): number {
  // 二分查找答案：找到最小的 x ，使得数组 nums 存在至少 k 个不超过 x 的数
  const n = nums.length;

  let lower = Math.min(...nums);
  let upper = Math.max(...nums);

  while (lower <= upper) {
    const middle = Math.floor((lower + upper) / 2);

    if (check(middle)) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }

  return lower;

  // 判断数组 nums 是否存在至少 k 个不超过 x 的数
  function check(mx: number): boolean {
    let count = 0;
    let i = 0;
    while (i < n && count < k) {
      if (nums[i] <= mx) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }

    return count === k;
  }
}

export { minCapability };
