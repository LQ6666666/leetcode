export { };

function constructArray(n: number, k: number): number[] {
  const ans = new Array<number>(n);

  let l = 1, r = k + 1;
  for (let i = 0; i <= k; i++) {
    if (i % 2 === 0) {
      ans[i] = l++
    } else {
      ans[i] = r--;
    }
  }

  for (let i = k + 1; i < n; i++) {
    ans[i] = i + 1;
  }

  return ans;
};

