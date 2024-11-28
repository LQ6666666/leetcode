function findPeaks(mountain: number[]): number[] {
  const n = mountain.length;
  const ans: number[] = [];
  for (let i = 1; i < n - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      ans.push(i);
    }
  }
  return ans;
}

export {};
