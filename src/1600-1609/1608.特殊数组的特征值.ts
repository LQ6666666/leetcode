function specialArray(nums: number[]): number {
  const n = nums.length;
  // 1.降序
  nums.sort((a, b) => b - a);

  // 2.遍历
  for (let i = 0; i <= n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] >= i) {
        count++;
      }
    }
    if (count === i) return i;
  }

  return -1;
};


export { specialArray };
