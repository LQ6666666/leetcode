function minLengthAfterRemovals(s: string): number {
  const n = s.length;
  let a = 0;
  let b = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      a++;
    } else {
      b++;
    }
  }
  return Math.abs(a - b);
}

export {};
