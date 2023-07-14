function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();
  for (const num of arr1) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const ans: number[] = [];
  for (const num of arr2) {
    let count = map.get(num) ?? 0;
    while (count-- > 0) {
      ans.push(num);
    }
  }

  const part: number[] = [];
  const set = new Set(ans);
  for (const num of arr1) {
    if (!set.has(num)) {
      part.push(num);
    }
  }
  part.sort((a, b) => a - b);
  return ans.concat(part);
}

export { relativeSortArray };
