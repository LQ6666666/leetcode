function repeatLimitedString(s: string, repeatLimit: number): string {
  const map = new Map<string, number>();
  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  let ans = "";
  for (let i = 25; i >= 0; i--) {
    const ch = String.fromCharCode(97 + i);
    let count = map.get(ch) ?? 0;

    let k = i - 1;
    while (count > 0) {
      for (let j = 0; count > 0 && j < repeatLimit; j++) {
        ans += ch;
        count--;
      }

      if (count === 0) break;

      while (k >= 0 && (map.get(String.fromCharCode(97 + k)) ?? 0) === 0) {
        k--;
      }
      if (k < 0) break;

      const nextCh = String.fromCharCode(97 + k);
      ans += nextCh;
      map.set(nextCh, (map.get(nextCh) ?? 0) - 1);
    }
  }

  return ans;
}

export { repeatLimitedString };
