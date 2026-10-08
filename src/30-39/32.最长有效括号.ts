function longestValidParentheses(s: string): number {
  const n = s.length;
  const isValid = new Array<boolean>(n).fill(false);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (stack.length > 0) {
      isValid[i] = isValid[stack.pop()!] = true;
    }
  }

  let ans = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isValid[i]) {
      count++;
    } else {
      count = 0;
    }
    ans = Math.max(count, ans);
  }
  return ans;
}

export {};
