function findMatrix(nums: number[]): number[][] {
  const countMap = new Map<number, number>();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  const ans: number[][] = [];
  while (countMap.size > 0) {
    const keys = Array.from(countMap.keys());
    const row: number[] = [];
    for (const key of keys) {
      row.push(key);
      let count = countMap.get(key)!;
      count--;
      if (count === 0) {
        countMap.delete(key);
      } else {
        countMap.set(key, count);
      }
    }
    ans.push(row);
  }

  return ans;
}

export {};
