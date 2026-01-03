function minimumFlips(n: number): number {
  let x = n;
  const arr: number[] = [];
  while (x) {
    arr.push(x & 1);
    x >>= 1;
  }

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ((n >> (arr.length - i - 1)) & 1)) {
      ans++;
    }
  }

  return ans;
}

export {};
