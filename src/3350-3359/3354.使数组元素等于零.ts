function countValidSelections(nums: number[]): number {
  const n = nums.length;
  const total = nums.reduce((memo, num) => memo + num, 0);

  let ans = 0;
  let pre = 0;
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    if (x) {
      pre += x;
    }
    // 如果前缀和 pre 等于后缀和 total−pre，那么小球初始方向可以向左，也可以向右，答案加 2
    else if (pre * 2 === total) {
      ans += 2;
    }
    // 如果前缀和比后缀和少 1，那么小球初始方向必须向右，才能打掉所有砖块，答案加 1
    else if (Math.abs(pre * 2 - total) === 1) {
      ans++;
    }
  }

  return ans;
}

export {};
