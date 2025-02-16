function replaceElements(arr: number[]): number[] {
  const n = arr.length;
  const ans = new Array<number>(n);

  let max = -1;
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = max;
    max = Math.max(max, arr[i]);
  }

  return ans;
}

export { replaceElements };
