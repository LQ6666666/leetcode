function minOperations(s: string): number {
  const n = s.length;

  let min = 26;
  for (let i = 0; i < n; i++) {
    if (s[i] !== "a") {
      min = Math.min(s.charCodeAt(i) - 97, min);
    }
  }

  return 26 - min;
}

export {};
