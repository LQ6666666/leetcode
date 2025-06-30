function findLHS(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let ans = 0;
  // 找到相差为 1 的 key
  const keys = Array.from<number>(map.keys()).sort((a, b) => a - b);

  for (let i = 0; i < keys.length - 1; i++) {
    if (keys[i + 1] - keys[i] !== 1) continue;

    const size = map.get(keys[i])! + map.get(keys[i + 1])!;
    ans = Math.max(ans, size);
  }

  return ans;
}

export { findLHS };
