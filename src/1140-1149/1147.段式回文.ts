function longestDecomposition(text: string): number {
  const n = text.length;
  let left = 0,
    right = text.length - 1;

  let count = 0;
  for (let i = right; i >= 0 && left <= right; i--) {
    if (text.slice(left, left + right + 1 - i) === text.slice(i, right + 1)) {
      count += 2;
      right = i - 1;
      left = n - right - 1;
    }
  }
  // 如果 left - 1 == right 则证明全部匹配完毕
  return left - 1 === right ? count : count - 1;
}

export {};
