function arrayRankTransform(arr: number[]): number[] {
  const n = arr.length;
  const indexMap = new Map<number, number>();
  const clone = Array.from(new Set(arr)).sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    indexMap.set(clone[i], i);
  }

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    ans[i] = indexMap.get(arr[i])! + 1;
  }
  return ans;
}

export {};
