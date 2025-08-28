function removeOccurrences(s: string, part: string): string {
  const n = s.length;
  const stack: string[] = [];

  for (let i = 0; i < n; i++) {
    stack.push(s[i]);

    if (stack.length >= part.length) {
      if (stack.slice(-part.length).join("") === part) {
        for (let j = 0; j < part.length; j++) {
          stack.pop();
        }
      }
    }
  }

  return stack.join("");
}

export { removeOccurrences };
