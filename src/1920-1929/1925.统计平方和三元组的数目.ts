function countTriples(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const c = Math.floor(Math.sqrt(i * i + j * j));
      if (c <= n && c * c === i * i + j * j) {
        ans += 2;
      }
    }
  }
  return ans;
}

export {};
