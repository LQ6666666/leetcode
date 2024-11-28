function maxRepOpt1(text: string): number {
  // 计算每个元素的个数
  const countMap = new Map<string, number>();
  for (const ch of text) {
    countMap.set(ch, (countMap.get(ch) ?? 0) + 1);
  }
  const n = text.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    // 找出当前连续的一段 [i, j)
    let j = i;
    while (j < n && text[i] === text[j]) {
      j++;
    }
    let count = j - i;

    // 如果这一段长度小于当前字符出现的总数, 并且前面或后面有空位, 则使用 count + 1 更新答案
    if (count < countMap.get(text[i])! && (i > 0 || j < n)) {
      ans = Math.max(ans, count + 1);
    }

    // 找到这一段后面与之相隔一个不同字符的另一段 [j + 1, k), 如果不存在 k = j + 1
    // 这种情况 bbbbabbbb
    let k = j + 1;
    while (k < n && text[k] === text[i]) {
      k++;
    }
    // 可能在 [j + 1, k) 段中的 text[i] 被交换到 j 的位置, 因此需要和 countMap[text[i]] 取较小值
    ans = Math.max(ans, Math.min(k - i, countMap.get(text[i])!));
  }

  return ans;
}

export {};
