function wiggleSort(nums: number[]): void {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i += 2) {
    const temp = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp;
  }
}

export {};
