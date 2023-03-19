function leftRigthDifference(nums: number[]): number[] {
  const n = nums.length;
  const sum = nums.reduce((prev, cur) => prev + cur);
  const ans = new Array<number>();
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const rightSum = sum - num - leftSum;
    ans[i] = Math.abs(leftSum - rightSum);
    leftSum += num;
  }
  return ans;
}

export {};
