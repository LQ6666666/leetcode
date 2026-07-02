function validUtf8(data: number[]): boolean {
  const n = data.length;

  let i = 0;
  while (i < n) {
    const t = data[i];
    let j = 7;
    while (j >= 0 && ((t >> j) & 1) === 1) {
      j--;
    }
    const count = 7 - j;
    if (count === 1 || count > 4) {
      return false;
    }
    if (i + count - 1 >= n) {
      return false;
    }

    for (let k = i + 1; k < i + count; k++) {
      if (((data[k] >> 7) & 1) == 1 && ((data[k] >> 6) & 1) == 0) {
        continue;
      }
      return false;
    }
    if (count === 0) {
      i++;
    } else {
      i += count;
    }
  }

  return true;
}

export {};
