// 哈希表
function containsNearbyDuplicate$(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(i - map.get(nums[i])!) <= k) {
        return true;
      }
    }

    map.set(nums[i], i);
  }

  return false;
}

// 滑动窗口
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }

    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }

  return false;
}

export { containsNearbyDuplicate };
