function firstUniqChar(s: string): number {
  const countArray = new Array<number>(26).fill(0);
  for (const ch of s) {
    countArray[ch.charCodeAt(0) - 97]++;
  }

  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (countArray[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }

  return -1;
}

export {};
