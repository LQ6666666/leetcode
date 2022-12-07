function minOperations(nums1: number[], nums2: number[]): number {
  const n1 = nums1.length,
    n2 = nums2.length;

  // 一定不可行
  if (n1 * 6 < n2 || n2 * 6 < n1) return -1;

  let ans = 0;
  let target = nums1.reduce((prev, cur) => prev + cur) - nums2.reduce((prev, cur) => prev + cur);
  // 默认 nums1 为 sum 大的数组
  if (target < 0) {
    return minOperations(nums2, nums1);
  }

  const map: number[] = new Array(6).fill(0);
  // 对于每个数可以减少的量
  for (const num of nums1) {
    map[num - 1]++;
  }
  // 对于每个数可以增加的量
  for (const num of nums2) {
    map[6 - num]++;
  }

  for (let i = 5; i >= 1 && target > 0; i--) {
    // 最少需要的个数 +(i- 1)为了向上取整
    const cnt = Math.min(map[i], Math.floor((target + i - 1) / i));
    ans += cnt;
    // 减去能够减少的最大值，若小于等等于 0，代表已经使得两个数组相等
    target -= cnt * i;
  }

  return ans;
}

export { minOperations };
