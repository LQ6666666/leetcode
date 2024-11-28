function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === "b" && (stack.length === 0 || stack.at(-1)! !== "a")) {
      return false;
    } else if (ch === "c" && (stack.length === 0 || stack.at(-1)! !== "b")) {
      return false;
    }

    stack.push(ch);

    if (ch === "c") {
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}

export {};
