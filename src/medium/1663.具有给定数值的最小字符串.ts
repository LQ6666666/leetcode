function getSmallestString(n: number, k: number): string {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    const lower = Math.max(1, k - (n - i) * 26);
    k -= lower;
    // "a".charCodeAt(0) + lower - 1 => 97 + lower - 1 => 96 + lower
    ans += String.fromCharCode(96 + lower);
  }
  return ans;
}

export { getSmallestString };
