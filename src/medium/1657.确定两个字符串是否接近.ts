const ASCII_A = "a".charCodeAt(0);

function closeStrings(s: string, t: string): boolean {
  // 1.判断 s 和 t 的长度是否一样，如果不一样直接返回 false
  if (s.length != t.length) return false;
  // 2.判断 s 和 t 的字符集合是否一样，
  //   如果不一样直接返回 false 例如 s 中有字符 abc
  //   t 中有字符 def 我们无论如何都不能把 s 变成 t
  const n = s.length;
  let sMark = 0;
  let tMark = 0;
  for (let i = 0; i < n; i++) {
    sMark |= 1 << (s[i].charCodeAt(0) - ASCII_A);
    tMark |= 1 << (t[i].charCodeAt(0) - ASCII_A);
  }
  if (sMark !== tMark) return false;

  // 3.判断 s 的字符出现次数的集合，是否等于 t 的字符出现次数的集合
  //   等于返回 true，不等于返回 false
  //   注意集合可以有相同元素，比如 aabbbccc 对应的集合就是 {2,3,3}
  const sCount = new Array<number>(26).fill(0);
  const tCount = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    sCount[s[i].charCodeAt(0) - ASCII_A]++;
    tCount[t[i].charCodeAt(0) - ASCII_A]++;
  }
  sCount.sort((a, b) => a - b);
  tCount.sort((a, b) => a - b);
  return sCount.toString() === tCount.toString();
}

export { closeStrings };
