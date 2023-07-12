function fractionToDecimal(numerator: number, denominator: number): string {
  const ans: string[] = [];
  let a = numerator,
    b = denominator;

  // 判断是否是负数
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    ans.push("-");
  }
  a = Math.abs(a);
  b = Math.abs(b);
  // 整数部分
  ans.push(Math.floor(a / b).toString());
  // 是否是整除
  if (a % b === 0) return ans.join("");

  ans.push(".");
  // 用哈希表记录所有被除数的下标
  // 如果出现了重复的被除数，则证明出现了循环
  const map = new Map<number, number>();
  while ((a = (a % b) * 10) > 0 && !map.has(a)) {
    map.set(a, ans.length);
    ans.push(Math.floor(a / b).toString());
  }
  if (a === 0) return ans.join("");
  ans.splice(map.get(a)!, 0, "(");
  ans.push(")");
  return ans.join("");
}

export { fractionToDecimal };
