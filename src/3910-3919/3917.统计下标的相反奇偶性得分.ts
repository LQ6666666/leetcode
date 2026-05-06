function countOppositeParity(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (nums[i] % 2 === 0) {
        if (nums[j] % 2 !== 0) {
          count++;
        }
      } else {
        if (nums[j] % 2 === 0) {
          count++;
        }
      }
    }
    ans[i] = count;
  }

  return ans;
}

export {};
