function minRemoveToMakeValid(s: string): string {
  const n = s.length;
  const indexSet = new Set<number>();
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === "(") {
      stack.push(i);
    } else if (ch === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        indexSet.add(i);
      }
    }
  }

  while (stack.length) {
    indexSet.add(stack.pop()!);
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    if (!indexSet.has(i)) {
      ans += s[i];
    }
  }

  return ans;
}

export { minRemoveToMakeValid };
