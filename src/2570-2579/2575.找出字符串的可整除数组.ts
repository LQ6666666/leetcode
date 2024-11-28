function divisibilityArray(word: string, m: number): number[] {
  const n = word.length;

  const ans: number[] = [];
  // 余数
  let prev = 0;
  // 模拟除法
  for (let i = 0; i < n; i++) {
    prev = (+word[i] + prev * 10) % m;
    ans.push(prev === 0 ? 1 : 0);
  }

  return ans;
}

export {};
