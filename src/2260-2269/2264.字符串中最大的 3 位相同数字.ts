function largestGoodInteger(num: string): string {
  const n = num.length;
  let ans = -1;
  for (let i = 0; i < n - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      ans = Math.max(+num[i], ans);
    }
  }
  return ans === -1 ? "" : "".padEnd(3, ans.toString());
}

export { largestGoodInteger };
