function concatHex36(n: number): string {
  return helper(n ** 2, 16) + helper(n ** 3, 36);
}

function helper(x: number, base: number) {
  let ret = "";
  while (x) {
    const carry = x % base;
    const s = carry > 9 ? String.fromCharCode(65 + carry - 10) : carry;
    ret = s + ret;
    x = Math.floor(x / base);
  }
  return ret;
}

export { concatHex36 };
