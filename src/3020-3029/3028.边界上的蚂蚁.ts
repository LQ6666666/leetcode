function returnToBoundaryCount(nums: number[]): number {
  let ans = 0;
  let t = 0;
  for (const num of nums) {
    t += num;
    if (t === 0) {
      ans++;
    }
  }
  return ans;
}

export { returnToBoundaryCount };
