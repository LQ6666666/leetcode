function maximumOddBinaryNumber$(s: string): string {
  const n = s.length;
  let count = 0;

  for (const ch of s) {
    if (ch === "1") {
      count++;
    }
  }

  const arr = new Array<number>(n).fill(0);
  if (count > 0) {
    arr[n - 1] = 1;
    count--;
  }

  let i = 0;
  while (count > 0) {
    arr[i++] = 1;
    count--;
  }

  return arr.join("");
}

function maximumOddBinaryNumber(s: string): string {
  const n = s.length;
  const result = new Array<number>(n).fill(0);

  let index = -1;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      if (index === -1) {
        result[n - 1] = 1;
      } else {
        result[index] = 1;
      }
      index++;
    }
  }

  return result.join("");
}

export {};
