function minimumSwap(s1: string, s2: string): number {
  const n = s1.length;
  let xy = 0,
    yx = 0;
  for (let i = 0; i < n; i++) {
    const a = s1[i];
    const b = s2[i];
    if (a === "x" && b === "y") {
      xy++;
    }

    if (a === "y" && b === "x") {
      yx++;
    }
  }

  // 如果 xy 和 yx 之和为奇数，则没有方法能够使得字符串相等
  if ((xy + yx) % 2 === 1) {
    return -1;
  }

  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) + (yx % 2);
}

export {};
