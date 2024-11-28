function largestValsFromLabels(
  values: number[],
  labels: number[],
  numWanted: number,
  useLimit: number
): number {
  const n = values.length;
  /** 按照 values 的值进行降序排序 */
  const idx = Array.from({ length: n }, (_, i) => i);
  idx.sort((a, b) => values[b] - values[a]);

  let ans = 0,
    /** 已经选择的元素个数 */
    choose = 0;

  /** 记录每一种标签已经选择的元素个数 */
  const countMap = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const index = idx[i];
    const label = labels[index];
    const count = countMap.get(label) ?? 0;
    if (count === useLimit) {
      continue;
    }

    choose++;
    ans += values[index];
    countMap.set(label, count + 1);

    // 选择的元素个数不能超过 numWanted
    if (choose === numWanted) {
      break;
    }
  }

  return ans;
}

export { largestValsFromLabels };
