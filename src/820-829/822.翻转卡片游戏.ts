function flipgame(fronts: number[], backs: number[]): number {
  const n = fronts.length;

  const forbidden = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (fronts[i] === backs[i]) {
      forbidden.add(fronts[i]);
    }
  }
  let ans = Number.MAX_SAFE_INTEGER;

  for (const x of fronts) {
    if (!forbidden.has(x)) {
      ans = Math.min(ans, x);
    }
  }

  for (const x of backs) {
    if (!forbidden.has(x)) {
      ans = Math.min(ans, x);
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

export { flipgame };
