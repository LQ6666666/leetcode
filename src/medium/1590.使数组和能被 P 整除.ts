function minSubarray(nums: number[], p: number): number {
  const n = nums.length;
  // 和的余数
  let x = 0;
  for (let i = 0; i < n; i++) {
    // (x1 + x2) % p == x1 % p + x2 % p
    x = (nums[i] + x) % p;
  }

  if (x === 0) return 0;

  let y = 0;
  let ans = n;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    // 表示当前左边数组（下标为 i-1 结尾的数组）的和的求余值
    map.set(y, i);
    y = (y + nums[i]) % p;
    const t = (y - x + p) % p;
    if (map.has(t)) {
      ans = Math.min(ans, i - map.get(t)! + 1);
    }
  }

  // 有更新过 ans 则有答案 未更新返回 -1
  return ans === n ? -1 : ans;
}

export {};
