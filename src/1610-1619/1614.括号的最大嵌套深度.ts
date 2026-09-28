function maxDepth(s: string): number {
  let ans = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "(") {
      count++;
    }

    if (c === ")") {
      count--;
    }

    if (ans < count) {
      ans = count;
    }
  }

  return ans;
}

export {};
