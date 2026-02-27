function maximumXor(s: string, t: string): string {
  const n = s.length;

  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < n; i++) {
    if (t[i] === "1") {
      count1++;
    } else {
      count0++;
    }
  }

  const arr = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      if (count0) {
        arr[i] = 1;
        count0--;
      } else {
        arr[i] = 0;
        count1--;
      }
    } else {
      if (count1) {
        arr[i] = 1;
        count1--;
      } else {
        arr[i] = 0;
        count0--;
      }
    }
  }

  return arr.join("");
}

export {};
