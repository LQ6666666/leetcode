function minMirrorPairDistance(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  let ans = n;
  for (let j = 0; j < n; j++) {
    const num = nums[j];
    const i = map.get(num);
    if (i !== undefined) {
      ans = Math.min(j - i, ans);
    }
    map.set(reverse(nums[j]), j);
  }

  return ans === n ? -1 : ans;
}

function reverse(x: number) {
  let ans = 0;
  while (x) {
    ans = ans * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return ans;
}

export {};
