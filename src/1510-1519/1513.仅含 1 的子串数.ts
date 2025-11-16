function numSub(s: string): number {
  const n = s.length;
  let ans = 0;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      count++;
    } else {
      count = 0;
    }
    ans = (ans % (10 ** 9 + 7)) + count;
  }

  return ans;
}

export { numSub };
