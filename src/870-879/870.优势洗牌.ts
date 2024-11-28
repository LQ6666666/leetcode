function advantageCount(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length;
  const idx1 = new Array<number>(n);
  const idx2 = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    idx1[i] = i;
    idx2[i] = i;
  }

  idx1.sort((a, b) => nums1[a] - nums1[b]);
  idx2.sort((a, b) => nums2[a] - nums2[b]);

  const ans = new Array<number>(n);
  let left = 0, right = n - 1;
  for (let i = 0; i < n; i++) {
    const index = idx1[i];

    if (nums1[index] > nums2[idx2[left]]) {
      ans[idx2[left++]] = nums1[index];
    } else {
      ans[idx2[right--]] = nums1[index];
    }
  }

  return ans;
};



export { advantageCount };
