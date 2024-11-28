function sortArrayByParityII(nums: number[]): number[] {
  let oddIndex = 1;
  let evenIndex = 0;

  const ans = new Array<number>(nums.length);
  for (const num of nums) {
    if (num % 2 === 0) {
      ans[evenIndex] = num;
      evenIndex += 2;
    } else {
      ans[oddIndex] = num;
      oddIndex += 2;
    }
  }

  return ans;
}

export { sortArrayByParityII };
