function getCommon(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const m = nums2.length;

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    const a = nums1[i];
    const b = nums2[j];
    if (a === b) {
      return a;
    } else if (a < b) {
      i++;
    } else {
      j++;
    }
  }

  return -1;
}

export { getCommon };
