function minimumAddedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const n = nums1.length;
  // 枚举保留 nums1[2] 或者 nums1[1] 或者 nums1[0]
  for (let i = 2; i > 0; i--) {
    const x = nums2[0] - nums1[i];

    let j = 0;
    for (let k = i; k < n; k++) {
      if (nums1[k] + x === nums2[j] && ++j === nums2.length) {
        return x;
      }
    }
  }

  // 所以当 nums1[2] 和 nums1​[1] 都不满足时，直接返回 nums2[0]−nums1[0]，无需判断
  return nums2[0] - nums1[0];
}

export {};
