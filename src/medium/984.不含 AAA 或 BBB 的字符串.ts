function strWithout3a3b(a: number, b: number): string {
  let i = a,
    j = b;

  let ans = "";
  while (i > 0 && j > 0) {
    if (i > j) {
      ans += "aab";
      (i -= 2), j--;
    } else if (i === j) {
      ans += "ab";
      i--, j--;
    } else {
      ans += "bba";
      i--, (j -= 2);
    }
  }

  while (i > 0) {
    ans += "a";
    i--;
  }
  while (j > 0) {
    ans += "b";
    j--;
  }
  return ans;
}

export { strWithout3a3b };
