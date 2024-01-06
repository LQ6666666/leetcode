function distance(nums: number[]): number[] {
  const n = nums.length;

  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const value = map.get(num) ?? [];
    value.push(i);
    map.set(num, value);
  }

  const ans = new Array<number>(n).fill(0);
  map.forEach(list => {
    const len = list.length;
    const sums = new Array<number>(len + 1).fill(0);
    for (let i = 0; i < len; i++) {
      sums[i + 1] = sums[i] + list[i];
    }

    for (let i = 0; i < len; i++) {
      const index = list[i];
      const left = index * i - sums[i];
      const right = sums[len] - sums[i] - index * (len - i);
      ans[index] = left + right;
    }
  });

  return ans;
}

export {};
