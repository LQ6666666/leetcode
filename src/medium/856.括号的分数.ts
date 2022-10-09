function scoreOfParentheses(s: string): number {
  let point = 0;
  const stack: number[] = [];

  for (const ch of s) {
    if (ch === "(") {
      stack.push(point);
      point = 0;
    } else {
      point = stack.pop()! + Math.max(point * 2, 1);
    }
  }

  return point;
};

export { scoreOfParentheses };
