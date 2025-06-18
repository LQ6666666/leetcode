function divideArray(nums: number[], k: number): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];

  for (let i = 0; i < n; i += 3) {
    const a = nums[i];
    const b = nums[i + 1];
    const c = nums[i + 2];
    if (Math.abs(a - b) > k || Math.abs(a - c) > k || Math.max(b - c) > k) {
      return [];
    }

    ans.push([a, b, c]);
  }

  return ans;
}

export { divideArray };
