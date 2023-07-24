function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels);

  let ans = 0;
  for (const stone of stones) {
    if (set.has(stone)) {
      ans++;
    }
  }

  return ans;
}

export {};
