function isArraySpecial(nums: number[]): boolean {
  const n = nums.length;

  // 偶数是 0 奇数是 1
  let prev: 0 | 1 = nums[0] % 2 === 0 ? 0 : 1;
  for (let i = 1; i < n; i++) {
    const current = nums[i] % 2 === 0 ? 0 : 1;
    if (current === prev) {
      return false;
    }
    prev = current;
  }

  return true;
}

export {};
