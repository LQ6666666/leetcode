function halvesAreAlike(s: string): boolean {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const end = s.length - 1;
  const half = s.length >> 1;

  let left = 0;
  let right = 0;
  for (let i = 0; i < half; i++) {
    if (set.has(s[i])) {
      left++;
    }

    if (set.has(s[end - i])) {
      right++;
    }
  }

  return left === right;
}

export {};
