const map = new Map<string, (a: number, b: number) => number>();
map.set("+", (a, b) => a + b);
map.set("-", (a, b) => a - b);
map.set("*", (a, b) => a * b);
map.set("/", (a, b) => {
  const x = a / b;
  return x > 0 ? Math.floor(x) : Math.ceil(x);
});

function evalRPN(tokens: string[]): number {
  const n = tokens.length;
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    const fn = map.get(token);
    if (fn) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(fn(a, b));
    } else {
      stack.push(+token);
    }
  }

  return stack.pop()!;
}

export {};
