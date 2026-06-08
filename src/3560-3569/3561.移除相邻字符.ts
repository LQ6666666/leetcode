function resultingString(s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    while (
      stack.length >= 2 &&
      (Math.abs(
        stack[stack.length - 2].codePointAt(0)! - stack[stack.length - 1].codePointAt(0)!
      ) === 1 ||
        Math.abs(
          stack[stack.length - 2].codePointAt(0)! - stack[stack.length - 1].codePointAt(0)!
        ) === 25)
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.join("");
}

export { resultingString };
