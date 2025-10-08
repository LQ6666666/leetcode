function evenNumberBitwiseORs(nums: number[]): number {
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      ans |= nums[i];
    }
  }
  return ans;
}

export { evenNumberBitwiseORs };
