function canPermutePalindrome(s: string): boolean {
  const counts = new Map<string, number>();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  let flag = false;
  const iterator = counts.values();
  let { done, value } = iterator.next();
  while (!done) {
    if (value % 2 !== 0) {
      if (flag) return false;

      flag = true;
    }

    ({ done, value } = iterator.next());
  }

  return true;
}

export { canPermutePalindrome };
