function isAlienSorted(words: string[], order: string): boolean {
  const n = words.length;
  const orderMap = new Map<string, number>();
  for (let i = 0; i < 26; i++) {
    orderMap.set(order[i], i);
  }

  for (let i = 1; i < n; i++) {
    const pre = words[i - 1];
    const cur = words[i];

    let valid = false;
    const min = Math.min(pre.length, cur.length);
    for (let j = 0; j < min; j++) {
      const a = orderMap.get(pre[j])!;
      const b = orderMap.get(cur[j])!;
      if (a > b) {
        return false;
      } else if (b > a) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      if (pre.length > cur.length) {
        return false;
      }
    }
  }

  return true;
}

export { isAlienSorted };
