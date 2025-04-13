function shiftingLetters(s: string, shifts: number[][]): string {
  const n = s.length;
  const m = shifts.length;

  const diff = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < m; i++) {
    const [start, end, direction] = shifts[i];
    const x = direction === 1 ? 1 : -1;
    diff[start] += x;
    diff[end + 1] -= x;
  }

  let ans = "";
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += diff[i];
    // 防止负数
    const shift = ((s.charCodeAt(i) - 97 + current) % 26) + 26;
    const code = String.fromCharCode((shift % 26) + 97);
    ans += code;
  }

  return ans;
}

export { shiftingLetters };
