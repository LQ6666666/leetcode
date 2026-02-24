function addBinary(a: string, b: string): string {
  let ans = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + carry;
    carry = 0;

    if (sum === 2) {
      ans = "0" + ans;
      carry = 1;
    } else if (sum === 1) {
      ans = "1" + ans;
    } else if (sum === 3) {
      ans = "1" + ans;
      carry = 1;
    } else {
      ans = "0" + ans;
    }

    i--;
    j--;
  }

  return ans;
}

export {};
