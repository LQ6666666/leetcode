function reinitializePermutation(n: number): number {
  let perm = Array.from({ length: n }, (_, i) => i);
  let ans = 0;

  while (true) {
    const arr = new Array<number>(n);
    for (let i = 0; i < n; i++) {
      if ((i & 1) !== 0) {
        arr[i] = perm[(n >> 1) + ((i - 1) >> 1)];
      } else {
        arr[i] = perm[i >> 1];
      }
    }

    perm = arr;
    ans++;
    if (check(perm)) {
      break;
    }
  }

  return ans;

  function check(arr: number[]) {
    for (let i = 0; i < n; i++) {
      if (arr[i] !== i) return false;
    }
    return true;
  }
}

export { reinitializePermutation };
