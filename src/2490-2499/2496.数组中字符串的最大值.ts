const set = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function maximumValue(strs: string[]): number {
  let ans = 0;
  for (const str of strs) {
    const n = str.length;
    let x = 0;
    for (let i = 0; i < n; i++) {
      if (set.has(str[i])) {
        x += +str[i] * 10 ** (n - 1 - i);
      } else {
        x = n;
        break;
      }
    }
    ans = Math.max(ans, x);
  }
  return ans;
}

export { maximumValue };
