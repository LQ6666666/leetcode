function largestInteger(nums: number[], k: number): number {
  const n = nums.length;
  if (k === n) {
    return Math.max(...nums);
  }
  if (k === 1) {
    const map = new Map<number, number>();
    for (let i = 0; i < n; i++) {
      map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    let ans = -1;
    map.forEach((v, k) => {
      if (v == 1) {
        ans = Math.max(ans, k);
      }
    });
    return ans;
  }

  // 只有 nums[0] 和 nums[n−1] 是可能满足要求的数
  // 返回这两个数中的出现次数等于 1 的最大元素
  return Math.max(f(nums, 1, n, nums[0]), f(nums, 0, n - 1, nums[n - 1]));
}

function f(nums: number[], begin: number, end: number, x: number): number {
  for (let i = begin; i < end; i++) {
    if (nums[i] == x) {
      return -1;
    }
  }
  return x;
}

export {};
