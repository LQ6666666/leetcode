function reversePrefix(s: string, k: number): string {
  const n = s.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (i < k) {
      ans = s[i] + ans;
    } else {
      ans = ans + s[i];
    }
  }
  return ans;
}

export {};
