function minimumSeconds(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const list = map.get(num) ?? [];
    list.push(i);
    map.set(num, list);
  }

  let ans = n;
  map.forEach(positions => {
    // 首尾
    let max = positions[0] + n - positions[positions.length - 1];
    for (let i = 1; i < positions.length; i++) {
      // 找到间隔的最大的距离
      max = Math.max(max, positions[i] - positions[i - 1]);
    }
    ans = Math.min(ans, Math.floor(max / 2));
  });

  return ans;
}

export { minimumSeconds };
