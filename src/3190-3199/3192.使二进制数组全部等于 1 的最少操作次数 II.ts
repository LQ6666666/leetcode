function minOperations(nums: number[]): number {
  let k = 0;
  for (const x of nums) {
    if (x === k % 2) {
      // 必须操作
      k++;
    }
  }
  return k;
}

export { minOperations };
