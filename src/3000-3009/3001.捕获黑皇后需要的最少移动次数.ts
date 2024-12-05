function minMovesToCaptureTheQueen(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number {
  // (a, b) 表示白色车的位置
  // (c, d) 表示白色象的位置
  // (e, f) 表示黑皇后的位置

  if (
    // 车直接攻击到皇后（同一行）
    (a === e && (c !== e || !inBetween(b, d, f))) ||
    // 车直接攻击到皇后（同一列）
    (b === f && (d !== f || !inBetween(a, c, e))) ||
    // 象直接攻击到皇后
    (c + d === e + f && (a + b !== e + f || !inBetween(c, a, e))) ||
    (c - d === e - f && (a - b !== e - f || !inBetween(c, a, e)))
  ) {
    return 1;
  }
  return 2;
}

// m 在 l 和 r 之间（写不写等号都可以）
function inBetween(l: number, m: number, r: number) {
  return Math.min(l, r) < m && m < Math.max(l, r);
}

export {};
