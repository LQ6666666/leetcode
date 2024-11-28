function findOriginalArray(changed: number[]): number[] {
  changed.sort((a, b) => a - b);
  const countMap = new Map<number, number>();

  for (const num of changed) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }
  const ans: number[] = [];
  for (const a of changed) {
    const count = countMap.get(a) ?? 0;
    if (count === 0) continue;

    countMap.set(a, count - 1);

    if (!countMap.get(a * 2)) return [];
    countMap.set(a * 2, countMap.get(a * 2)! - 1);
    ans.push(a);
  }

  return ans;
}

export { findOriginalArray };
