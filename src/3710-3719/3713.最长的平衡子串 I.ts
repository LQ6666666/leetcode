function longestBalanced(s: string): number {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const count = new Array<number>(26).fill(0);
    for (let j = i; j < n; j++) {
      const base = ++count[s.charCodeAt(j) - 97];
      let flag = true;
      for (let k = 0; k < 26; k++) {
        if (count[k] > 0 && count[k] !== base) {
          flag = false;
          break;
        }
      }
      if (flag) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
}

export {};
