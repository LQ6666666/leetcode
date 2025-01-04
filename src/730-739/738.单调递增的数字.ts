function monotoneIncreasingDigits(x: number): number {
  const nums: number[] = [];
  while (x > 0) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }
  nums.reverse();
  const n = nums.length;

  let index = n;
  for (let i = n - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      nums[i - 1]--;
      // 后续全变成 9 的索引
      index = Math.min(index, i);
    }
  }

  for (let j = index; j < n; j++) {
    nums[j] = 9;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans * 10 + nums[i];
  }
  return ans;
}

export { monotoneIncreasingDigits };
