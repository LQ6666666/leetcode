function expressiveWords(s: string, words: string[]): number {
  let ans = 0;
  for (const word of words) {
    if (helper(s, word)) {
      ans++;
    }
  }
  return ans;
}

function helper(s: string, word: string): boolean {
  const n = s.length;
  const m = word.length;

  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const ch = s[i];
    // 首先我们需要保证字母相同，这两部分不是相同的字母，无法进行扩张
    if (ch !== word[j]) return false;

    // 随后我们不断地向右移动两个指针，直到移动到与之前不同的字母，或者超出字符串的边界
    // 计算 s 重复字符串的个数
    let countI = 0;
    while (i < n && s[i] === ch) {
      i++;
      countI++;
    }

    // 计算 word 重复字符串的个数
    let countJ = 0;
    while (j < m && word[j] === ch) {
      j++;
      countJ++;
    }

    // countJ 大于 countI，扩张不能减少字符
    if (countI < countJ) return false;
    // 数量相等时候无需扩展
    // 数量不相等 && countI 数量小于 3 无法扩展
    if (countI !== countJ && countI < 3) return false;
  }

  return i === n && j === m;
}

// console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
export { expressiveWords };
