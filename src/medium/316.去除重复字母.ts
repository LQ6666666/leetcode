function removeDuplicateLetters(s: string): string {
  const n = s.length;
  const stack: string[] = [];
  const set = new Set<string>();
  const counts = new Array<number>(26).fill(0);

  for (let i = 0; i < n; i++) {
    counts[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < n; i++) {
    const c = s[i];
    counts[c.charCodeAt(0) - 97]--;

    if (set.has(c)) continue;

    while (
      stack.length &&
      stack[stack.length - 1].charCodeAt(0) > c.charCodeAt(0) &&
      // 后续还有
      counts[stack[stack.length - 1].charCodeAt(0) - 97] > 0
    ) {
      set.delete(stack.pop()!);
    }

    set.add(c);
    stack.push(c);
  }

  return stack.join("");
}
export {};
