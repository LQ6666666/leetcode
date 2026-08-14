function countOfSubstrings(word: string, k: number): number {
  return f(word, k) - f(word, k + 1);
}

function f(word: string, k: number): number {
  const n = word.length;
  let ans = 0;
  const map: Record<string, number> = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let count = 0;
  let left = 0;
  for (let i = 0; i < n; i++) {
    if (Object.prototype.hasOwnProperty.call(map, word[i])) {
      map[word[i]]++;
    } else {
      count++;
    }
    while (Object.keys(map).every(key => map[key] >= 1) && count >= k) {
      const out = word[left];
      if (Object.prototype.hasOwnProperty.call(map, word[left])) {
        map[out] = Math.max(0, map[out] - 1);
      } else {
        count--;
      }
      left++;
    }
    ans += left;
  }
  return ans;
}

export {};
