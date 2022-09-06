export { };

function checkDistances(s: string, distance: number[]): boolean {
  const n = s.length;
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    const index = map.get(ch);

    if (index === undefined) {
      map.set(ch, i);
    } else {
      const diff = i - index - 1;
      if (distance[ch.charCodeAt(0) - 97] !== diff) {
        return false;
      }
      map.delete(ch);
    }
  }

  return true;
};
