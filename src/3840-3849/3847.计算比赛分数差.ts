function scoreDifference(nums: number[]): number {
  const n = nums.length;

  let score1 = 0;
  let score2 = 0;
  let flag = false;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num % 2 !== 0) {
      flag = !flag;
    }
    if ((i + 1) % 6 === 0) {
      flag = !flag;
    }
    if (flag) {
      score2 += num;
    } else {
      score1 += num;
    }
  }

  return score1 - score2;
}

export { scoreDifference };
