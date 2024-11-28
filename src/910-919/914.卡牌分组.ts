function hasGroupsSizeX(deck: number[]): boolean {
  const counts = new Array(10000).fill(0);
  for (let d of deck) {
    counts[d]++;
  }

  let g = 0;
  for (let b of counts) {
    if (b === 0) continue;
    g = gcd(b, g);
    if (g === 1) return false;
  }
  return g >= 2;
}

/** 最大公约数 */
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export {};
