// 如果nums中所有元素【大于||等于k】那么请返回nums中【大于K】的不重复元素有几个
// 如果nums中有【小于k】的值就返回-1

function minOperations(nums: number[], k: number): number {
  const n = nums.length;
  const set = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (nums[i] >= k) {
      if (nums[i] > k) {
        set.add(nums[i]);
      }
    } else {
      return -1;
    }
  }

  return set.size;
}

export { minOperations };
