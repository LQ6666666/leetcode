function arrayNesting(nums: number[]): number {
  const n = nums.length;
  const visible = new Array<number>(n).fill(0);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (visible[i] === 1) {
      continue;
    }
    let j = i;
    let count = 0;
    while (visible[j] === 0) {
      count++;
      const tmp = nums[j];
      visible[j] = 1;
      j = tmp;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}

export {};
