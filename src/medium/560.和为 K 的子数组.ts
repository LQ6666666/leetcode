function subarraySum(nums: number[], k: number): number {
  const n = nums.length;
  const map = new Map<number, number>();
  map.set(0, 1);

  let ans = 0;
  let pre = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    pre += num;

    // 因为存在负数或者 0，负数和 0 的出现可以导致之前的前缀和有相加等于 0 的情况
    if (map.has(pre - k)) {
      ans += map.get(pre - k)!;
    }

    if (map.has(pre)) {
      map.set(pre, map.get(pre)! + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return ans;
}

export { subarraySum };
