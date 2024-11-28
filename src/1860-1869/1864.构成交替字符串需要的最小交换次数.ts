function minSwaps(s: string): number {
  const n = s.length;

  // 统计 1 的数量，奇数位 1 和 0 的数量
  let cntOne = 0,
    oddOne = 0,
    oddZero = 0;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === "1") cntOne++;

    if (i % 2 === 0) continue;

    if (ch === "1") {
      oddOne++;
    } else {
      oddZero++;
    }
  }

  // 0 的数量
  const cntZero = n - cntOne;
  // 0 和 1 数量相差大于 1，无法组成目标字符串返回 -1
  if (Math.abs(cntOne - cntZero) > 1) return -1;
  // 1 的数量大于 0 的数量，只能组成以 1 开头的字符串，奇数位的 1 需交换位置
  if (cntOne > cntZero) return oddOne;
  // 0 的数量大于 1 的数量，只能组成以 0 开头的字符串，奇数位的 0 需交换位置
  if (cntZero > cntOne) return oddZero;
  // 0 和 1 开头均可，判断需要交换数量较小场景
  return Math.min(oddOne, oddZero);
}

export { minSwaps };
