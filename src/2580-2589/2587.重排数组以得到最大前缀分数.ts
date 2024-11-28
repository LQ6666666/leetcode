function maxScore(nums: number[]): number {
  nums.sort((a, b) => b - a);
  let sum = 0;
  let ans = 0;
  for (const num of nums) {
    sum += num;
    if (sum > 0) {
      ans++;
    } else {
      break;
    }
  }
  return ans;
}

export { maxScore };
