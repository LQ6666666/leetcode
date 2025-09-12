function hasSpecialSubstring(s: string, k: number): boolean {
  const n = s.length;

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && s[j - 1] === s[j]) {
      j++;
    }

    if (j - i === k) {
      return true;
    }

    i = j - 1;
  }

  return false;
}

export { hasSpecialSubstring };
