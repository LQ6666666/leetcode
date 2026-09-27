function reverseParentheses(s: string): string {
  // 用栈存放 str
  const stack: string[] = [];
  let ans = "";

  for (const ch of s) {
    if (ch === "(") {
      stack.push(ans);
      ans = "";
    } else if (ch === ")") {
      const part1 = stack.pop();
      const part2 = reverse(ans);
      ans = part1 + part2;z
    } else {
      ans += ch;
    }
  }

  return ans;
}

function reverse(str: string): string {
  let ans = "";
  for (const item of str) {
    ans = item + ans;
  }
  return ans;
}

export {};
