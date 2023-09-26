function maximumOddBinaryNumber(s: string): string {
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

export {};
