function numOfPairs(nums: string[], target: string): number {
  const n = nums.length;
  const map = new Map<string, number[]>();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let value = map.get(num);
    if (!value) {
      map.set(num, (value = []));
    }
    value.push(i);
  }

  let ans = 0;
  for (const num of nums) {
    const index = help(num, target);
    if (index !== -1) {
      const key = target.slice(index);
      const value = map.get(key);
      if (value) {
        ans += value.length;
        // i != j 去掉自身的情况
        if (num === key) {
          ans--;
        }
      }
    }
  }

  return ans;
}

function help(a: string, b: string) {
  let n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return -1;
    }
  }
  return n;
}

export { numOfPairs };
