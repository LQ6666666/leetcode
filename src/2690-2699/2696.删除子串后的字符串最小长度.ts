function minLength(s: string): number {
  const stack: string[] = [];

  for (const ch of s) {
    if (size(stack) > 0) {
      if (ch === "B" && top(stack) === "A") {
        stack.pop();
        continue;
      } else if (ch === "D" && top(stack) === "C") {
        stack.pop();
        continue;
      }
    }

    stack.push(ch);
  }

  return stack.length;
}

function size<T>(stack: T[]) {
  return stack.length;
}

function top<T>(stack: T[]) {
  return stack.at(-1)!;
}

export {};
