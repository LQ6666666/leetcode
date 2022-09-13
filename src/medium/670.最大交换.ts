function maximumSwap(num: number): number {
  const strArr = num.toString().split("");
  const n = strArr.length;
  let ans = num;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(i, j);
      ans = Math.max(ans, +strArr.join(""));
      swap(i, j);
    }
  }

  return ans;

  function swap(i: number, j: number): void {
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
  }
};

export { maximumSwap }
