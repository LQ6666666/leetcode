function scoreBalance(s: string): boolean {
  const n = s.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += s.charCodeAt(i) - 97 + 1;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += s.charCodeAt(i) - 97 + 1;
    if (sum * 2 === total) {
      return true;
    }
  }

  return false;
}

export { scoreBalance };
