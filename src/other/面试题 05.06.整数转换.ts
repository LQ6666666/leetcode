function convertInteger(A: number, B: number): number {
  let ans = 0;
  let x = A ^ B;
  while (x) {
    if (x & 1) {
      ans++;
    }
    x >>>= 1;
  }
  return ans;
}

export {};
