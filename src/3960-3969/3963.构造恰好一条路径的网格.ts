function createGrid(m: number, n: number): string[] {
  const ans: string[] = [];
  ans.push(".".repeat(n));
  for (let i = 1; i < m; i++) {
    ans.push("#".repeat(n - 1) + ".");
  }
  return ans;
}

export {};
