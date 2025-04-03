function findScore(nums: number[]): number {
  const n = nums.length;
  // 生成一个下标数组，对下标排序
  const indexMap = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    indexMap[i] = i;
  }
  indexMap.sort((a, b) => nums[a] - nums[b]);

  let ans = 0;
  const vis = new Array<boolean>(n + 2);
  for (let i = 0; i < n; i++) {
    const index = indexMap[i];
    if (!vis[index + 1]) {
      vis[index] = true;
      vis[index + 2] = true;
      ans += nums[index];
    }
  }

  return ans;
}

export { findScore };
