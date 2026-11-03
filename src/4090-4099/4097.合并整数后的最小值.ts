function minMergedInteger(nums: number[]): number {
  const n = nums.length;

  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i += 2) {
    const arr = helper(nums[i]).concat(helper(nums[i + 1]));
    let x = 0;
    for (let j = 0; j < arr.length; j++) {
      x = x * 10 + arr[j];
    }
    ans = Math.min(ans, x);
  }

  return ans;
}

function helper(x: number): number[] {
  const result: number[] = [];
  while (x > 0) {
    result.unshift(x % 10);
    x = Math.floor(x / 10);
  }
  return result;
}

export {};
