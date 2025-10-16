function findSmallestInteger(nums: number[], value: number): number {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    // 从而保证取模结果在 [0,m) 中
    const v = ((num % value) + value) % value;
    map.set(v, (map.get(v) ?? 0) + 1);
  }

  let mex = 0;
  while (true) {
    const v = mex % value;
    if ((map.get(v) ?? 0) === 0) break;

    map.set(v, (map.get(v) ?? 0) - 1);
    mex++;
  }
  return mex;
}

export { findSmallestInteger };
