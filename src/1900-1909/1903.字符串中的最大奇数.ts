function largestOddNumber(num: string): string {
  const n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    // 判断个位即可
    let k = +num[i];
    if (k % 2) {
      return num.slice(0, i + 1);
    }
  }
  return "";
}

export { largestOddNumber };
