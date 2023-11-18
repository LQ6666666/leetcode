function maximumSum(nums: number[]): number {
  const map = new Map<number, number[]>();
  for (const num of nums) {
    const sum = helper(num);
    const value = map.get(sum) ?? [];
    value.push(num);
    map.set(sum, value);
  }

  let ans = -1;
  map.forEach(value => {
    if (value.length < 2) return;
    value.sort((a, b) => b - a);

    ans = Math.max(value[0] + value[1], ans);
  });

  return ans;
}

function helper(num: number): number {
  let ans = 0;
  let x = num;
  while (x > 0) {
    ans += x % 10;
    x = Math.floor(x / 10);
  }
  return ans;
}

export {};
