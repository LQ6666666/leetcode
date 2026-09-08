function countRotations(s: string, k: number): number {
  const n = s.length;
  let same = 0;
  let ans = 0;
  for (let i = 0; i < n * 2 - 2; i++) {
    // 1. 入
    if (s[i % n] === s[(i + 1) % n]) {
      same++;
    }

    // 注意窗口长度为 n-1
    let left = i - n + 2;
    if (left < 0) {
      continue;
    }

    // 2. 更新答案
    if (same === k) {
      ans++;
    }

    // 3. 出
    if (s[left] === s[(left + 1) % n]) {
      same--;
    }
  }

  return ans;
}

export {};
