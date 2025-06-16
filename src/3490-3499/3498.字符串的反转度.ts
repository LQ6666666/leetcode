function reverseDegree(s: string): number {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans += (26 - (s.charCodeAt(i) - 97)) * (i + 1);
  }

  return ans;
}

export { reverseDegree };
