function makeFancyString(s: string): string {
  const n = s.length;
  const stack: string[] = [];
  for (let i = 0; i < n; i++) {
    if (
      stack.length >= 2 &&
      stack[stack.length - 2] === stack[stack.length - 1] &&
      stack[stack.length - 2] === s[i]
    ) {
      stack.pop();
    }
    stack.push(s[i]);
  }
  return stack.join("");
}

export { makeFancyString };
