function minSum(nums1: number[], nums2: number[]): number {
  let sum1 = 0;
  let count1 = 0;
  let sum2 = 0;
  let count2 = 0;
  for (const num of nums1) {
    sum1 += num;
    if (num === 0) {
      count1++;
    }
  }
  for (const num of nums2) {
    sum2 += num;
    if (num === 0) {
      count2++;
    }
  }

  if ((sum1 + count1 > sum2 && count2 === 0) || (sum2 + count2 > sum1 && count1 === 0)) {
    return -1;
  }
  return Math.max(sum1 + count1, sum2 + count2);
}

export { minSum };
