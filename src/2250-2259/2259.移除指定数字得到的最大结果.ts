// 暴力
function $removeDigit(number: string, digit: string): string {
  let ans = "";
  const n = number.length;

  for (let i = 0; i < n; i++) {
    const ch = number[i];
    if (ch === digit) {
      const s = number.slice(0, i) + number.slice(i + 1);
      if (s > ans) {
        ans = s;
      }
    }
  }

  return ans.toString();
}

function removeDigit(number: string, digit: string): string {
  const n = number.length;
  let last = -1;
  for (let i = 0; i < n; i++) {
    const num = number[i];
    if (num === digit) {
      if (num < number[i + 1]) {
        return number.slice(0, i) + number.slice(i + 1);
      }
      last = i;
    }
  }
  return number.slice(0, last) + number.slice(last + 1);
}

export {};
