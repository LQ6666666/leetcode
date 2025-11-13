function maxOperations(s: string): number {
  const n = s.length;
  let ans = 0;
  let count1 = 0;

  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "1") {
      count1++;
    } else if (i > 0 && s[i - 1] === "1") {
      ans += count1;
    }
  }

  return ans;
}

export {};
