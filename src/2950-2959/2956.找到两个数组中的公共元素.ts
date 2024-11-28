function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ans: [number, number] = [0, 0];

  for (const num of nums1) {
    if (set2.has(num)) {
      ans[0]++;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      ans[1]++;
    }
  }

  return ans;
}

export { findIntersectionValues };
