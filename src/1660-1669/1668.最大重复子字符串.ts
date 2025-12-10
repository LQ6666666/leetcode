function maxRepeating(sequence: string, word: string): number {
  const m = sequence.length;
  const n = word.length;
  let ans = 0;
  if (m < n) return ans;

  let left = 0;
  let right = Math.floor(m / n);
  while (left <= right) {
    const count = left + Math.floor((right - left) / 2);
    const sub = word.repeat(count);
    if (sequence.includes(sub)) {
      ans = count;
      left = count + 1;
    } else {
      right = count - 1;
    }
  }

  return ans;
}

export {};
