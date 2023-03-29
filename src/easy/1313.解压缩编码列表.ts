function decompressRLElist(nums: number[]): number[] {
  const ans: number[] = [];
  const n = nums.length;
  for (let i = 0; i < n; i += 2) {
    const count = nums[i];
    const num = nums[i + 1];
    for (let j = 0; j < count; j++) {
      ans.push(num);
    }
  }
  return ans;
}

export {};
