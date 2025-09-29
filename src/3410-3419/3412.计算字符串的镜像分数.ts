function calculateScore(s: string): number {
  const n = s.length;
  const map = Array.from<unknown, number[]>({ length: 26 }, () => []);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const ch = s.charCodeAt(i) - 97;
    const mirror = 25 - ch;

    if (map[mirror].length === 0) {
      map[ch].push(i);
    } else {
      ans += i - map[mirror].pop()!;
    }
  }

  return ans;
}

export { calculateScore };
