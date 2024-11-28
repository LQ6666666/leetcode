function discountPrices(sentence: string, discount: number): string {
  const arr = sentence.split(" ");
  const ans: string[] = [];
  for (const item of arr) {
    ans.push(helper(item, discount));
  }
  return ans.join(" ");
}

function helper(s: string, discount: number): string {
  const n = s.length;
  if (s[0] !== "$" || n < 2) {
    return s;
  }

  let i = 1;
  // 获取数字
  let numStr = "";
  while (i < n) {
    if (/\d/.test(s[i])) {
      numStr += s[i];
    } else {
      return s;
    }
    i++;
  }
  const num = +numStr;
  return `$${(num - num * (discount / 100)).toFixed(2)}`;
}

export { discountPrices };
