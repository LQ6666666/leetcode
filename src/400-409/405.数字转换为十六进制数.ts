const hex = "0123456789abcdef";

function toHex(num: number): string {
  if (num == 0) return "0";
  let ans = "";
  while (num && ans.length < 8) {
    // 4位2进制 === 1位十六进制
    ans = hex[num & 0xf] + ans;
    num >>= 4;
  }
  return ans;
}

export { toHex };
