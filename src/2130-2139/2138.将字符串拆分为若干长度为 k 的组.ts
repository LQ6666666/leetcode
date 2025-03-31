function divideString(s: string, k: number, fill: string): string[] {
  const ans: string[] = [];

  const n = s.length;
  for (let i = 0; i < n; i += k) {
    let temp = "";
    for (let j = 0; j < k; j++) {
      if (i + j < n) {
        temp += s[i + j];
      } else {
        temp += fill;
      }
    }
    ans.push(temp);
  }

  return ans;
}

export { divideString };
