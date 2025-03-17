function minSwaps(s: string): number {
  const n = s.length;
  let ans = 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    const b = s[i];
    if (b === "[") {
      c++;
    } else if (c > 0) {
      c--;
    } else {
      ans++;
      c++;
    }
  }
  return ans;
}

export { minSwaps };
