function masterMind(solution: string, guess: string): number[] {
  const count: Record<string, number> = {
    R: 0,
    G: 0,
    B: 0,
    Y: 0
  };
  for (const c of guess) {
    count[c]++;
  }

  const ans: [number, number] = [0, 0];
  for (let i = 0; i < 4; i++) {
    if (solution[i] === guess[i]) {
      ans[0]++;
      count[solution[i]]--;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (solution[i] !== guess[i] && count[solution[i]] > 0) {
      ans[1]++;
      count[solution[i]]--;
    }
  }

  return ans;
}

export {};
