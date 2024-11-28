function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  // 按空格分割得到的字符串数组
  const words1 = sentence1.split(" "),
    words2 = sentence2.split(" ");

  const n = words1.length,
    m = words2.length;

  // 要被插入字符串数组的长度
  const minLen = Math.min(n, m);

  // i 表示两个字符串数组从左开始，最多有 i 个字符串相同。
  // j 表示剩下的字符串数组从右开始，最多有 j 个字符串相同
  let i = 0,
    j = 0;

  // 从左开始
  while (i < minLen && words1[i] === words2[i]) {
    i++;
  }

  // 从右开始
  while (j < minLen - i && words1[n - j - 1] === words2[m - j - 1]) {
    j++;
  }

  // 如果 i + j 正好是某个字符串数组的长度，那么原字符串就是相似的
  return i + j == minLen;
}

export { areSentencesSimilar };
