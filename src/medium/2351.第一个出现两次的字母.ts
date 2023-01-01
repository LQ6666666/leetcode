function repeatedCharacter(s: string): string {
  const visit = new Set<string>();

  for (const ch of s) {
    if (visit.has(ch)) {
      return ch;
    }
    visit.add(ch);
  }

  return "";
}

export { repeatedCharacter };
