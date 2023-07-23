function largestNumber(nums: number[]): string {
  const ans = nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");

  return ans[0] === "0" ? "0" : ans;
}

export { largestNumber };
