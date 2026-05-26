function passwordStrength(password: string): number {
  const n = password.length;
  const set = new Set<number>();

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const code = password.charCodeAt(i);
    if (!set.has(code)) {
      set.add(code);
      if (code >= 98 && code <= 122) {
        ans += 1;
      } else if (code >= 65 && code <= 90) {
        ans += 2;
      } else if (code >= 48 && code <= 57) {
        ans += 3;
      } else if (code === 33 || code === 64 || code === 35 || code === 36) {
        ans += 5;
      }
    }
  }

  return ans;
}

export {};
