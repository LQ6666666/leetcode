function canAliceWin(nums: number[]): boolean {
  let sum1 = 0;
  let sum2 = 0;

  for (const num of nums) {
    if (num < 10) {
      sum1 += num;
    } else {
      sum2 += num;
    }
  }

  // 不相等就能赢
  return sum1 !== sum2;
}

export {};
