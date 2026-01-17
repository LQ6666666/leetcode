function minimumDistance(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let list = map.get(num);
    if (!list) {
      map.set(num, (list = []));
    }
    list.push(i);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  map.forEach(list => {
    if (list.length < 3) return;

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        for (let k = j + 1; k < list.length; k++) {
          const a = list[i];
          const b = list[j];
          const c = list[k];
          ans = Math.min(ans, Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a));
        }
      }
    }
  });

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export {};
