function countSpecialIntegers(nums: number[]): number {
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

  let ans = 0;
  map.forEach(list => {
    if (list.length >= 3) {
      for (let i = 0; i < list.length - 2; i++) {
        if (list[i + 1] - list[i] !== list[i + 2] - list[i + 1]) {
          return;
        }
      }
      ans++;
    }
  });
  return ans;
}

export {};
