function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const n = nums1.length;
  const m = nums2.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        ans++;
      }
    }
  }

  return ans;
}

export { numberOfPairs };
