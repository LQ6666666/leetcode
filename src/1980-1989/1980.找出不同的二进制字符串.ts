function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length;
  const ans = new Array<string>(n);

  for (let i = 0; i < n; i++) {
    if (nums[i][i] === "0") {
      ans[i] = "1";
    } else {
      ans[i] = "0";
    }
  }

  return ans.join("");
}

export { findDifferentBinaryString };
