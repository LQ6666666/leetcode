function freqAlphabets(s: string): string {
  let ans = "";

  let i = s.length - 1;
  while (i >= 0) {
    let code: number;
    if (s[i] === "#") {
      code = +s[i - 2] * 10 + +s[i - 1];
      i -= 3;
    } else {
      code = +s[i];
      i--;
    }

    ans = String.fromCharCode(code + 96) + ans;
  }

  return ans;
}

export { freqAlphabets };
