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
    for (let i = 1; i < list.length; i++) {
      if (list[i - 1] + 1 !== list[i]) {
        return;
      }
    }
    ans++;
  });

  return ans;
}

export {};
