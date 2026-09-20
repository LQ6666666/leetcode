function minNumberOfFrogs(croakOfFrogs: string): number {
  let c = 0;
  let r = 0;
  let o = 0;
  let a = 0;
  let k = 0;

  for (const ch of croakOfFrogs) {
    if (ch === "c") {
      if (k > 0) {
        k--;
      }
      c++;
    } else if (ch === "r") {
      r++;
      c--;
    } else if (ch === "o") {
      o++;
      r--;
    } else if (ch === "a") {
      a++;
      o--;
    } else if (ch === "k") {
      k++;
      a--;
    }

    if (c < 0 || r < 0 || o < 0 || a < 0 || k < 0) {
      return -1;
    }
  }

  if (c > 0 || r > 0 || o > 0 || a > 0) {
    return -1;
  }

  return k;
}

export {};
