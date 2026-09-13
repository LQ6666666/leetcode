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
    if (list.length === 3) {
      if (list[1] - list[0] === list[2] - list[1]) {
        ans++;
      }
    }
  });
  return ans;
}

export {};
