function maxProductPair(nums: number[], target: number): number[] {
  const n = nums.length;
  const map = new Map<number, number>();
  const ans: [number, number] = [-1, -1];
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    if (x * 2 === target) {
      // nums[i] 必须大于 nums[j]，不存在相等的解
      continue;
    }
    const y = target - x;
    const j = map.get(y);
    if (j !== undefined && (ans[0] < 0 || x * y > nums[ans[0]] * (target - nums[ans[0]]))) {
      ans[0] = i;
      ans[1] = j;
    }
    map.set(x, i);
  }

  if (ans[0] >= 0 && nums[ans[0]] < nums[ans[1]]) {
    [ans[1], ans[0]] = [ans[0], ans[1]];
  }

  return ans;
}

export {};
