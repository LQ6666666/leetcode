function countHillValley(nums: number[]): number {
  const filteredNums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === 0 || nums[i] !== nums[i - 1]) {
      filteredNums.push(num);
    }
  }

  let ans = 0;
  for (let i = 1; i < filteredNums.length - 1; i++) {
    if (
      (filteredNums[i] < filteredNums[i - 1] && filteredNums[i] < filteredNums[i + 1]) ||
      (filteredNums[i] > filteredNums[i - 1] && filteredNums[i] > filteredNums[i + 1])
    ) {
      ans++;
    }
  }

  return ans;
}

export { countHillValley };
