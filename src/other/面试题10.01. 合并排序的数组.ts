function merge(A: number[], m: number, B: number[], n: number): void {
  const ans = new Array<number>(m + n);
  let index = 0;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (A[i] < B[j]) {
      ans[index] = A[i];
      i++;
    } else {
      ans[index] = B[j];
      j++;
    }
    index++;
  }

  while (i < m) {
    ans[index++] = A[i++];
  }

  while (j < n) {
    ans[index++] = B[j++];
  }

  for (let i = 0; i < m + n; i++) {
    A[i] = ans[i];
  }
}

export {};
