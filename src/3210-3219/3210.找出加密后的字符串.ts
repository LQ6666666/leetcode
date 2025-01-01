function getEncryptedString(s: string, k: number): string {
  const n = s.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += s[(i + k) % n];
  }
  return ans;
}

export { getEncryptedString };
