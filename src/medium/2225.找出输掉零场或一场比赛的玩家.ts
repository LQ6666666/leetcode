function findWinners(matches: number[][]): number[][] {
  const map = new Map<number, [number, number]>();

  for (const [winner, lose] of matches) {
    let w = map.get(winner);
    if (!w) {
      map.set(winner, (w = [0, 0]));
    }
    w[0]++;

    let l = map.get(lose);
    if (!l) {
      map.set(lose, (l = [0, 0]));
    }
    l[1]++;
  }

  let ans: number[][] = [[], []];
  const keys = Array.from(map.keys()).sort((a, b) => a - b);
  for (const key of keys) {
    const [w, l] = map.get(key)!;
    if (w > 0 && l === 0) {
      ans[0].push(key);
    } else if (l === 1) {
      ans[1].push(key);
    }
  }

  return ans;
}

export {};
