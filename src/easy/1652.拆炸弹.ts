function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  const ans = new Array<number>(n);

  if (k === 0) {
    return ans.fill(0);
  } else if (k > 0) {
    for (let i = 0; i < n; i++) {
      let value = 0;

      let count = k, j = i + 1;
      while (count-- > 0) {
        if (j === n) {
          j = 0;
        }
        value += code[j++];
      }
      ans[i] = value;
    }
  } else {
    for (let i = 0; i < n; i++) {
      let value = 0;

      let count = Math.abs(k), j = i - 1;
      while (count-- > 0) {
        if (j === -1) {
          j = n - 1;
        }
        value += code[j--];
      }
      ans[i] = value;
    }
  }

  return ans;
}


export { decrypt };
