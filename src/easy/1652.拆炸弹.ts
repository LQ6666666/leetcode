function decrypt$(code: number[], k: number): number[] {
  const n = code.length;
  const ans = new Array<number>(n);

  if (k === 0) {
    return ans.fill(0);
  } else if (k > 0) {
    for (let i = 0; i < n; i++) {
      let value = 0;

      let count = k,
        j = i + 1;
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

      let count = Math.abs(k),
        j = i - 1;
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

function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  const ans = new Array<number>(n).fill(0);
  if (k === 0) return ans;

  if (k > 0) {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      let index = 0;
      while (index < k) {
        sum += code[(index++ + i + 1) % n];
      }
      ans[i] = sum;
    }
  } else {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      let index = k;
      while (index < 0) {
        sum += code.at((index++ + i) % n)!;
      }
      ans[i] = sum;
    }
  }

  return ans;
}

export { decrypt };
