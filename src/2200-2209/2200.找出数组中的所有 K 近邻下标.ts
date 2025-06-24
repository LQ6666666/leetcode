function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length;
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
        ans.push(i);
        break;
      }
    }
  }

  return ans;
}

export { findKDistantIndices };
