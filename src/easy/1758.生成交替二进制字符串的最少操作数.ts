function minOperations(s: string): number {
  const n = s.length;
  let countA = 0;
  let countB = 0;

  // 10101010
  // 01010101
  for (let i = 0; i < n; i++) {
    const flag = i % 2 === 0 ? "1" : "0";
    if (s[i] === flag) {
      countA++;
    } else {
      countB++;
    }
  }

  return Math.min(countA, countB);
}

export {};
