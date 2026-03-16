function minimumDistance(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let value = map.get(num);
    if (!value) {
      map.set(num, (value = []));
    }
    value.push(i);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  map.forEach(value => {
    if (value.length < 3) return;
    for (let i = 0; i < value.length - 2; i++) {
      const a = value[i];
      const b = value[i + 1];
      const c = value[i + 2];
      const d = Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a);
      ans = Math.min(d, ans);
    }
  });

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export {};
