function balancedStringSplit(s: string): number {
  const n = s.length;
  let ans = 0;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "L") {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      ans++;
    }
  }

  return ans;
}

export { balancedStringSplit };
