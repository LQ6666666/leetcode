function minimumOperations(nums: number[]): number {
  let ans = 0;
  for (let num of nums) {
    if (num >= 3) {
      num %= 3;
    }
    ans += Math.min(num, 3 - num);
  }
  return ans;
}

export { minimumOperations };
