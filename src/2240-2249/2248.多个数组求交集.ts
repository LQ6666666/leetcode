function intersection(nums: number[][]): number[] {
  const n = nums.length;
  const map = new Map<number, number>();

  for (const arr of nums) {
    for (const num of arr) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
  }

  const ans: number[] = [];
  map.forEach((value, key) => {
    if (value === n) {
      ans.push(key);
    }
  });

  ans.sort((a, b) => a - b);
  return ans;
}

export { intersection };
