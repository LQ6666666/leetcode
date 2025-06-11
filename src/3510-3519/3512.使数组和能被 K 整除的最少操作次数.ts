function minOperations(nums: number[], k: number): number {
  let ans = 0;

  let num = nums.reduce((memo, x) => memo + x, 0);
  while (num % k !== 0) {
    ans++;
    num--;
  }

  return ans;
}

export { minOperations };
