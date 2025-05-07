function makeGood(s: string): string {
  const n = s.length;
  const stack: string[] = [];

  for (let i = 0; i < n; i++) {
    if (stack.length > 0) {
      const last = stack[stack.length - 1].charCodeAt(0);
      const current = s.charCodeAt(i);

      if (last - 32 === current || last + 32 === current) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

export { makeGood };
