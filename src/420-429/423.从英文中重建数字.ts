function originalDigits(s: string): string {
  const map = new Map<string, number>();
  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  const cnt = new Array<number>(10).fill(0);

  cnt[0] = map.get("z") || 0;
  cnt[2] = map.get("w") || 0;
  cnt[4] = map.get("u") || 0;
  cnt[6] = map.get("x") || 0;
  cnt[8] = map.get("g") || 0;

  cnt[3] = (map.get("h") || 0) - cnt[8];
  cnt[5] = (map.get("f") || 0) - cnt[4];
  cnt[7] = (map.get("s") || 0) - cnt[6];

  cnt[1] = (map.get("o") || 0) - cnt[0] - cnt[2] - cnt[4];

  cnt[9] = (map.get("i") || 0) - cnt[5] - cnt[6] - cnt[8];

  const ans: number[] = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      ans.push(i);
    }
  }

  return ans.join("");
}

export {};
