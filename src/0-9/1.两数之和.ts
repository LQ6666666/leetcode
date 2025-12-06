function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    const index = map.get(target - num);
    if (index === undefined) {
      map.set(num, i);
    } else {
      return [index, i];
    }
  }

  return nums;
}

export { twoSum };
