function minimumSteps(s: string): number {
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      sum++;
    } else {
      ans += sum;
    }
  }
  return ans;
}

export {};
