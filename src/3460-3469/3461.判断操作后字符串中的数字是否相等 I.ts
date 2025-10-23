function hasSameDigits(s: string): boolean {
  while (s.length > 2) {
    const n = s.length;
    let temp = "";
    for (let i = 1; i < n; i++) {
      temp += (+s[i - 1] + +s[i]) % 10;
    }
    s = temp;
  }

  return s[0] === s[1];
}

export {};
