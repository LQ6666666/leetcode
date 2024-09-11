function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length;
  const set = new Set<number>();
  const ans = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    set.add(A[i]);
    set.add(B[i]);

    ans[i] = (i + 1) * 2 - set.size;
  }

  return ans;
}

export { findThePrefixCommonArray };
