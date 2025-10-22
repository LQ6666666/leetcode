function beautifulBouquet(flowers: number[], cnt: number): number {
  const n = flowers.length;

  let ans = 0;
  const map = new Map<number, number>();
  for (let i = 0, j = 0; j < n; j++) {
    map.set(flowers[j], (map.get(flowers[j]) ?? 0) + 1);
    while ((map.get(flowers[j]) ?? 0) > cnt) {
      map.set(flowers[i], (map.get(flowers[i]) ?? 0) - 1);
      i++;
    }

    ans += j - i + 1;
  }

  return ans;
}

export { beautifulBouquet };
