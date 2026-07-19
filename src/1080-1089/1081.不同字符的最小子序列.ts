function smallestSubsequence(s: string): string {
  const n = s.length;
  const stack: string[] = [];
  const set = new Set<string>();
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) - 1);

    if (set.has(s[i])) continue;

    while (
      stack.length > 0 &&
      stack[stack.length - 1].charCodeAt(0) > s.charCodeAt(i) &&
      (map.get(stack[stack.length - 1]) ?? 0) > 0
    ) {
      set.delete(stack.pop()!);
    }

    set.add(s[i]);
    stack.push(s[i]);
  }

  return stack.join("");
}

export {};
