function clearDigits(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (/\d+/.test(ch) && stack.length) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}

export { clearDigits };
