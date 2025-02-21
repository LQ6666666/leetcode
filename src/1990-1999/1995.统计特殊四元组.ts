function countQuadruplets(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 3; i++) {
    const a = nums[i];
    for (let j = i + 1; j < n - 2; j++) {
      const b = nums[j];
      for (let k = j + 1; k < n - 1; k++) {
        const c = nums[k];
        for (let u = k + 1; u < n; u++) {
          const d = nums[u];
          if (a + b + c === d) {
            ans++;
          }
        }
      }
    }
  }
  return ans;
}

export { countQuadruplets };
