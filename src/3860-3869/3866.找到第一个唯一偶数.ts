function firstUniqueEven(nums: number[]): number {
  const map = new Map<number, number>();
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    if (map.get(nums[i]) === 1 && nums[i] % 2 === 0) {
      return nums[i];
    }
  }

  return -1;
}

export { firstUniqueEven };
