function strToInt(str: string): number {
  // 1.去除前置空格
  str = str.trimStart();
  if (str.length === 0) return 0;
  // 2.第一位不是数字或者 + -
  const firstCh = str.charAt(0)
  if (!/^[0-9+-]$/.test(firstCh)) return 0;
  // 3.确定符号
  let sign = "+";
  if (["-", "+"].includes(firstCh)) {
    sign = firstCh;
    str = str.slice(1);
  }

  let temp = "";
  // 4.找到不是字符串的位置
  const RE = /^[0-9]$/
  for (const ch of str) {
    if (!RE.test(ch)) break;

    temp += ch;
  }

  if (temp.length === 0) return 0;
  // 转成数字
  const ans = +(sign + temp);
  const MAX = 2147483647;
  const MIN = -2147483648;
  if (ans >= MAX) return MAX;
  if (ans < MIN) return MIN;

  return ans;
};


export { strToInt };
