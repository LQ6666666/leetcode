function minimumIndex(capacity: number[], itemSize: number): number {
  const n = capacity.length;
  let ans = -1;

  for (let i = 0; i < n; i++) {
    if (capacity[i] >= itemSize) {
      if (ans === -1 || capacity[i] < capacity[ans]) {
        ans = i;
      }
    }
  }

  return ans;
}

export {};
